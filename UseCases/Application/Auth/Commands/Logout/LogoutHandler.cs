using EFCorePostgres;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.SqlExpressions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Auth.Commands.Logout
{
    public class LogoutHandler : IRequestHandler<LogoutCommand>
    {
        private readonly AppDbContext _appDbContext;

        public LogoutHandler(
            AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<Unit> Handle(LogoutCommand request, CancellationToken cancellationToken)
        {
            var result = await _appDbContext.Accounts.FirstOrDefaultAsync(
                account => account.AuthTokens.Any(token => token.Token == request.Token));

            if (result == null)
            {
                throw new ApplicationException("Invalid token.");
            }

            result.AuthTokens.Remove(result.AuthTokens.First(i => i.Token == request.Token));

            await _appDbContext.SaveChangesAsync();

            return Unit.Value;
        }
    }
}
