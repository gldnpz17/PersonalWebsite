using MediatR;

namespace Application.Auth.Commands.Logout
{
    public class LogoutCommand : IRequest
    {
        public string Token { get; set; }
    }
}
