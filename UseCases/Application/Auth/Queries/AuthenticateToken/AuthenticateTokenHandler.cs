using DomainModel.Services;
using EFCorePostgres;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Auth.Queries.AuthenticateToken
{
    public class AuthenticateTokenHandler : IRequestHandler<AuthenticateTokenQuery, TokenAuthenticationResult>
    {
        private readonly AppDbContext _appDbContext;
        private readonly IDateTimeService _dateTimeService;

        public AuthenticateTokenHandler(
            AppDbContext appDbContext,
            IDateTimeService dateTimeService)
        {
            _appDbContext = appDbContext;
            _dateTimeService = dateTimeService;
        }

        public async Task<TokenAuthenticationResult> Handle(AuthenticateTokenQuery request, CancellationToken cancellationToken)
        {
            var resultAccount = await _appDbContext.Accounts.FirstOrDefaultAsync(
                account => account.AuthTokens.Any(token => token.Token == request.Token));


            if (resultAccount == null)
            {
                return new TokenAuthenticationResult() { IsValid = false, Username = null };
            }

            if (resultAccount.CheckAuthTokenValidity(request.Token, _dateTimeService) == false)
            {
                return new TokenAuthenticationResult() { IsValid = false, Username = null };
            }

            await _appDbContext.SaveChangesAsync();

            return new TokenAuthenticationResult() { IsValid = true, Username = resultAccount.Username };
        }
    }
}
