using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Auth.Queries.AuthenticateToken
{
    public class AuthenticateTokenQuery : IRequest<TokenAuthenticationResult>
    {
        public string Token { get; set; }
    }
}
