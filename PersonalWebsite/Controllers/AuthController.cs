using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Auth.Commands.Logout;
using Application.Auth.Commands.ResetPassword;
using Application.Auth.Commands.SendPasswordResetMessage;
using Application.Auth.Queries.Login;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PersonalWebsite.Common.Auth;
using PersonalWebsite.Common.DTOs.Auth;

namespace PersonalWebsite.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly IMapper _mapper;

        public AuthController(
            IMediator mediator,
            IMapper mapper)
        {
            _mediator = mediator;
            _mapper = mapper;
        }

        [HttpPost("login")]
        public async Task<ActionResult<LoginResponseDto>> Login([FromBody]LoginRequestDto dto)
        {
            var result = await _mediator.Send(
                new LoginQuery()
                {
                    Username = dto.Username,
                    Password = dto.Password
                });

            Response.Cookies.Append(
                "auth-cookie",
                result.Token,
                new CookieOptions()
                {
                    Secure = true,
                    SameSite = SameSiteMode.Strict,
                    HttpOnly = true
                });

            return Ok(_mapper.Map<LoginResponseDto>(result));
        }

        [Authorize(AuthorizationPolicyConstants.AuthenticatedUsersOnlyPolicy)]
        [HttpPost("logout")]
        public async Task<ActionResult> Logout()
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
                throw new Exception("Logout failure, token not found.");
            }

            await _mediator.Send(
                new LogoutCommand()
                {
                    Token = tokenString
                });

            return Ok();
        }

        [Authorize(AuthorizationPolicyConstants.AuthenticatedUsersOnlyPolicy)]
        [HttpPost("remote-logout")]
        public async Task<ActionResult> RemoteLogout([FromBody]RemoteLogoutRequestDto dto)
        {
            await _mediator.Send(
                new LogoutCommand()
                {
                    Token = dto.Token
                });

            return Ok();
        }

        [HttpPost("send-password-reset-message")]
        public async Task<ActionResult> SendPasswordResetMessage([FromBody]SendPasswordResetMessageRequestDto dto)
        {
            await _mediator.Send(
                new SendPasswordResetMessageCommand()
                {
                    EmailAddress = dto.EmailAddress
                });

            return Ok();
        }

        [HttpPost("reset-password")]
        public async Task<ActionResult> ResetPassword([FromBody]ResetPasswordRequestDto dto)
        {
            await _mediator.Send(
                new ResetPasswordCommand()
                {
                    PasswordResetToken = dto.PasswordResetToken,
                    NewPassword = dto.NewPassword
                });

            return Ok();
        }
    }
}