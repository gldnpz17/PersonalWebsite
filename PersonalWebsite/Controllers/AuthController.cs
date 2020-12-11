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
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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

            return Ok(_mapper.Map<LoginResponseDto>(result));
        }

        [HttpPost("logout")]
        public async Task<ActionResult> Logout([FromBody]LogoutRequestDto dto)
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