using DomainModel.Common;
using DomainModel.Enums;
using DomainModel.Services;
using DomainModel.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainModel.Entities
{
    public class Account
    {
        public virtual string Username { get; set; }
        public virtual PasswordCredential PasswordCredential { get; set; }
        public virtual string EmailAddress { get; set; }
        public virtual List<AuthToken> AuthTokens { get; set; }
        public virtual List<PasswordResetToken> PasswordResetTokens { get; set; }

        public AuthToken Login( 
            string password, 
            IAlphanumericTokenGenerator tokenGenerator, 
            IDateTimeService dateTimeService,
            IPasswordHashingService passwordHashingService)
        {
            var hashedPassword = passwordHashingService.HashPassword(password, PasswordCredential.Salt);

            if (hashedPassword != PasswordCredential.HashedPassword)
            {
                throw new DomainModelException("Incorrect username or password");
            }

            var authToken =
                new AuthToken()
                {
                    Token = tokenGenerator.GenerateAlphanumericToken(16),
                    CreatedAt = dateTimeService.GetCurrentDateTime()
                };

            AuthTokens.Add(authToken);

            return authToken;
        }

        public void Logout(string token)
        {
            var result = AuthTokens.FirstOrDefault(i => i.Token == token);

            if (result == null)
            {
                throw new DomainModelException("This account doesn't have the given token.");
            }

            AuthTokens.Remove(result);
        }

        public void SendPasswordResetMessage(
            IPasswordResetMessageSender passwordResetMessageSender,
            IAlphanumericTokenGenerator tokenGenerator,
            IDateTimeService dateTimeService)
        {
            var resetToken =
                new PasswordResetToken()
                {
                    Token = tokenGenerator.GenerateAlphanumericToken(16),
                    CreatedAt = dateTimeService.GetCurrentDateTime()
                };

            PasswordResetTokens.Add(resetToken);

            var addresses = new Dictionary<TypesOfAdress, string>();
            addresses.Add(TypesOfAdress.Email, EmailAddress);

            passwordResetMessageSender.SendPasswordResetMessage(addresses, resetToken);
        }

        public void ResetPassword(
            string resetToken, 
            string newPassword, 
            IDateTimeService dateTimeService,
            IPasswordHashingService passwordHashingService,
            ISecureRng secureRng)
        {
            var result = PasswordResetTokens.FirstOrDefault(i => i.Token == resetToken);

            if (result == null)
            {
                throw new DomainModelException("Reset token doesn't exist");
            }

            if (dateTimeService.GetCurrentDateTime() > result.CreatedAt.AddHours(6))
            {
                throw new DomainModelException("Reset token expired");
            }

            string salt = secureRng.GenerateSecureRandomString(16);

            PasswordCredential =
                new PasswordCredential()
                {
                    HashedPassword = passwordHashingService.HashPassword(newPassword, salt),
                    Salt = salt
                };
        }

        public bool CheckAuthTokenValidity(string token, IDateTimeService dateTimeService)
        {
            var resultToken = AuthTokens.FirstOrDefault(i => i.Token == token);

            if (resultToken == null)
            {
                return false;
            }

            if (dateTimeService.GetCurrentDateTime() > resultToken.CreatedAt.AddDays(30))
            {
                AuthTokens.Remove(resultToken);
                return false;
            }

            return true;
        }
    }
}
