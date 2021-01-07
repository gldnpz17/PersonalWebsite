using DomainModel.Enums;
using DomainModel.Services;
using DomainModel.ValueObjects;
using System.Collections.Generic;
using System.Diagnostics;

namespace SimpleDomainServiceImplementation.PasswordResetMessageSenderImplementation
{
    public class PasswordResetMessageSenderImplementation : IPasswordResetMessageSender
    {
        public void SendPasswordResetMessage(Dictionary<TypesOfAdress, string> addresses, PasswordResetToken token)
        {
            foreach (var address in addresses)
            {
                if (address.Key == TypesOfAdress.Email)
                {
                    Debug.WriteLine($"reset email sent to {address.Value}");
                }
            }
        }
    }
}
