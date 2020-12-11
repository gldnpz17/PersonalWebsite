using DomainModel.Services;
using EFCorePostgres;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Auth.Commands.ResetPassword
{
    public class ResetPasswordHandler : IRequestHandler<ResetPasswordCommand>
    {
        private readonly AppDbContext _appDbContext;
        private readonly IDateTimeService _dateTimeService;
        private readonly IPasswordHashingService _passwordHashingService;
        private readonly ISecureRng _secureRng;

        public ResetPasswordHandler(
            AppDbContext appDbContext,
            IDateTimeService dateTimeService,
            IPasswordHashingService passwordHashingService,
            ISecureRng secureRng)
        {
            _appDbContext = appDbContext;
            _dateTimeService = dateTimeService;
            _passwordHashingService = passwordHashingService;
            _secureRng = secureRng;
        }

        public async Task<Unit> Handle(ResetPasswordCommand request, CancellationToken cancellationToken)
        {
            var resultAccount = await _appDbContext.Accounts.FirstOrDefaultAsync(
                account => account.PasswordResetTokens.Any(token => token.Token == request.PasswordResetToken));

            if (resultAccount == null)
            {
                throw new ApplicationException("Invalid password reset token");
            }

            resultAccount.ResetPassword(
                request.PasswordResetToken,
                request.NewPassword,
                _dateTimeService,
                _passwordHashingService,
                _secureRng);

            await _appDbContext.SaveChangesAsync();

            return Unit.Value;
        }
    }
}
