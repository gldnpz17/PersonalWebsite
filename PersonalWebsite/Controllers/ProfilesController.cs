using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Profile.Educations.Commands.CreateEducation;
using Application.Profile.Educations.Commands.DeleteEducation;
using Application.Profile.Educations.Queries.ReadAllEducations;
using Application.Profile.Skills.Commands.CreateSkill;
using Application.Profile.Skills.Commands.DeleteSkill;
using Application.Profile.Skills.Queries.ReadAllSkills;
using AutoMapper;
using DomainModel.ValueObjects;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PersonalWebsite.Common.Auth;
using PersonalWebsite.Common.DTOs.Profiles.Educations;
using PersonalWebsite.Common.DTOs.Profiles.Skills;

namespace PersonalWebsite.Controllers
{
    [Route("api/profile")]
    [ApiController]
    public class ProfilesController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly IMapper _mapper;

        public ProfilesController(
            IMediator mediator,
            IMapper mapper)
        {
            _mediator = mediator;
            _mapper = mapper;
        }

        [Authorize(AuthorizationPolicyConstants.AuthenticatedUsersOnlyPolicy)]
        [HttpPost("educations")]
        public async Task<ActionResult> CreateEducation([FromBody]CreateEducationRequestDto dto)
        {
            await _mediator.Send(new CreateEducationCommand() { Education = _mapper.Map<Education>(dto) });

            return Ok();
        }

        [Authorize(AuthorizationPolicyConstants.AuthenticatedUsersOnlyPolicy)]
        [HttpDelete("educations/{institution}_{department}")]
        public async Task<ActionResult> DeleteEducation([FromRoute]string institution, [FromRoute]string department)
        {
            await _mediator.Send(
                new DeleteEducationCommand()
                {
                    Institution = institution,
                    Department = department
                });

            return Ok();
        }

        [HttpGet("educations")]
        public async Task<ActionResult<IList<ReadAllEducationsResponseDto>>> ReadAllEducations()
        {
            var result = await _mediator.Send(new ReadAllEducationsQuery());

            var output = new List<ReadAllEducationsResponseDto>();

            result.Educations.ForEach(i => output.Add(_mapper.Map<ReadAllEducationsResponseDto>(i)));

            return output;
        }

        [Authorize(AuthorizationPolicyConstants.AuthenticatedUsersOnlyPolicy)]
        [HttpPost("skills")]
        public async Task<ActionResult> CreateSkill([FromBody]CreateSkillRequestDto dto)
        {
            await _mediator.Send(new CreateSkillCommand() { Skill = _mapper.Map<Skill>(dto) });

            return Ok();
        }

        [Authorize(AuthorizationPolicyConstants.AuthenticatedUsersOnlyPolicy)]
        [HttpDelete("skills/{skillName}")]
        public async Task<ActionResult> DeleteSkill([FromRoute]string skillName)
        {
            await _mediator.Send(new DeleteSkillCommand() { Name = skillName });

            return Ok();
        }

        [HttpGet("skills")]
        public async Task<ActionResult<IList<ReadAllSkillsResponseDto>>> ReadAllSkills()
        {
            var result = await _mediator.Send(new ReadAllSkillsQuery());

            var output = new List<ReadAllSkillsResponseDto>();

            result.Skills.ForEach(i => output.Add(_mapper.Map<ReadAllSkillsResponseDto>(i)));

            return output;
        }
    }
}