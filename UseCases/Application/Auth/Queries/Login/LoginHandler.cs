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

namespace Application.Auth.Queries.Login
{
    public class LoginHandler : IRequestHandler<LoginQuery, LoginResult>
    {
        private readonly AppDbContext _appDbContext;
        private readonly IAlphanumericTokenGenerator _alphanumericTokenGenerator;
        private readonly IDateTimeService _dateTimeService;
        private readonly IPasswordHashingService _passwordHashingService;

        public LoginHandler(
            AppDbContext appDbContext,
            IAlphanumericTokenGenerator alphanumericTokenGenerator,
            IDateTimeService dateTimeService,
            IPasswordHashingService passwordHashingService)
        {
            _appDbContext = appDbContext;
            _alphanumericTokenGenerator = alphanumericTokenGenerator;
            _dateTimeService = dateTimeService;
            _passwordHashingService = passwordHashingService;
        }

        public async Task<LoginResult> Handle(LoginQuery request, CancellationToken cancellationToken)
        {
            var account = await _appDbContext.Accounts.FirstOrDefaultAsync(i => i.Username == request.Username);

            if (account == null)
            {
                throw new ApplicationException("Incorrect username or password.");
            }

            var token = account.Login(
                request.Password,
                _alphanumericTokenGenerator,
                _dateTimeService,
                _passwordHashingService);

            await _appDbContext.SaveChangesAsync();

            return new LoginResult() { Token = token.Token };
        }
    }
}
