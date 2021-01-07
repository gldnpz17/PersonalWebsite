using MediatR;

namespace Application.Auth.Queries.Login
{
    public class LoginQuery : IRequest<LoginResult>
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
