using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Projects.Commands.CreateProject;
using Application.Projects.Commands.DeleteProject;
using Application.Projects.Queries.ReadAllProjects;
using Application.Projects.Queries.ReadProjectById;
using AutoMapper;
using DomainModel.Entities;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PersonalWebsite.Common.Auth;
using PersonalWebsite.Common.DTOs.Projects;

namespace PersonalWebsite.Controllers
{
    [Route("api/projects")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly IMapper _mapper;

        public ProjectsController(
            IMediator mediator,
            IMapper mapper)
        {
            _mediator = mediator;
            _mapper = mapper;
        }
        
        [Authorize(AuthorizationPolicyConstants.AuthenticatedUsersOnlyPolicy)]
        [HttpPost]
        public async Task<ActionResult> CreateProject([FromBody]CreateProjectRequestDto dto)
        {
            await _mediator.Send(new CreateProjectCommand() { Project = _mapper.Map<Project>(dto) });

            return Ok();
        }

        [Authorize(AuthorizationPolicyConstants.AuthenticatedUsersOnlyPolicy)]
        [HttpDelete("{projectId}")]
        public async Task<ActionResult> DeleteProject([FromRoute]string projectId)
        {
            await _mediator.Send(new DeleteProjectCommand() { Id = Guid.Parse(projectId) });

            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult<IList<ReadAllProjectsResponseDto>>> ReadAllProjects()
        {
            var result = await _mediator.Send(new ReadAllProjectsQuery());

            var output = new List<ReadAllProjectsResponseDto>();

            result.Projects.ForEach(i => output.Add(_mapper.Map<ReadAllProjectsResponseDto>(i)));

            return Ok(output);
        }

        [HttpGet("{projectId}")]
        public async Task<ActionResult<ReadProjectByIdResponseDto>> ReadProjectById([FromRoute]string projectId)
        {
            var result = await _mediator.Send(new ReadProjectByIdQuery() { Id = Guid.Parse(projectId) });

            return Ok(_mapper.Map<ReadProjectByIdResponseDto>(result.Project));
        }
    }
}