using MediatR;

namespace Application.Auth.Queries.AuthenticateToken
{
    public class AuthenticateTokenQuery : IRequest<TokenAuthenticationResult>
    {
        public string Token { get; set; }
    }
}
