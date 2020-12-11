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

namespace Application.Auth.Commands.SendPasswordResetMessage
{
    public class SendPasswordResetMessageHandler : IRequestHandler<SendPasswordResetMessageCommand>
    {
        private readonly AppDbContext _appDbContext;
        private readonly IPasswordResetMessageSender _passwordResetMessageSender;
        private readonly IAlphanumericTokenGenerator _alphanumericTokenGenerator;
        private readonly IDateTimeService _dateTimeService;

        public SendPasswordResetMessageHandler(
            AppDbContext appDbContext,
            IPasswordResetMessageSender passwordResetMessageSender,
            IAlphanumericTokenGenerator alphanumericTokenGenerator,
            IDateTimeService dateTimeService)
        {
            _appDbContext = appDbContext;
            _passwordResetMessageSender = passwordResetMessageSender;
            _alphanumericTokenGenerator = alphanumericTokenGenerator;
            _dateTimeService = dateTimeService;
        }

        public async Task<Unit> Handle(SendPasswordResetMessageCommand request, CancellationToken cancellationToken)
        {
            var resultAccount = await _appDbContext.Accounts.FirstOrDefaultAsync(i => i.EmailAddress == request.EmailAddress);

            if (resultAccount == null)
            {
                throw new ApplicationException("Couldn't find an account with the given email address.");
            }

            resultAccount.SendPasswordResetMessage(
                _passwordResetMessageSender,
                _alphanumericTokenGenerator,
                _dateTimeService);

            await _appDbContext.SaveChangesAsync();

            return Unit.Value;
        }
    }
}
