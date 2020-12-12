using Application.Auth.Queries.AuthenticateToken;
using MediatR;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;

namespace PersonalWebsite.Common.Auth
{
    public class ValidateRandomTokenAuthenticationHandler : AuthenticationHandler<RandomTokenAuthenticationSchemeOptions>
    {
        private readonly IMediator _mediator;

        public ValidateRandomTokenAuthenticationHandler(
            IOptionsMonitor<RandomTokenAuthenticationSchemeOptions> options, 
            ILoggerFactory logger, 
            UrlEncoder encoder, 
            ISystemClock clock,
            IMediator mediator) : base(options, logger, encoder, clock)
        {
            _mediator = mediator;
        }

        protected override async Task<AuthenticateResult> HandleAuthenticateAsync()
        {
            var headerToken = Request.Headers["Auth-Token"].FirstOrDefault();
            var cookieToken = Request.Cookies["auth-cookie"];

            string tokenString;
            //use header token first, then use the cookie token
            if (headerToken != null)
            {
                tokenString = headerToken;
            }
            else if (cookieToken != null)
            {
                tokenString = cookieToken;
            }
            else
            {
                return AuthenticateResult.Fail("token not found.");
            }

            var tokenResult = await _mediator.Send(
                new AuthenticateTokenQuery()
                {
                    Token = tokenString
                });

            if (tokenResult.IsValid)
            {
                //construct claims
                var claims =
                    new List<Claim>()
                    {
                        new Claim("Username", tokenResult.Username)
                    };

                var claimsIdentity = new ClaimsIdentity(claims);

                var ticket = new AuthenticationTicket(new ClaimsPrincipal(claimsIdentity), Scheme.Name);

                return AuthenticateResult.Success(ticket);
            }
            else
            {
                return AuthenticateResult.Fail($"invalid token supplied. token: {tokenString}");
            }
        }
    }
}
