using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Blog.Commands.CreatePost;
using Application.Blog.Commands.DeletePost;
using Application.Blog.Queries.ReadAllPosts;
using Application.Blog.Queries.ReadPostById;
using AutoMapper;
using DomainModel.Entities;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PersonalWebsite.Common.Auth;
using PersonalWebsite.Common.DTOs.Posts;

namespace PersonalWebsite.Controllers
{
    [Route("api/posts")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly IMapper _mapper;

        public PostsController(
            IMediator mediator,
            IMapper mapper)
        {
            _mediator = mediator;
            _mapper = mapper;
        }

        [Authorize(AuthorizationPolicyConstants.AuthenticatedUsersOnlyPolicy)]
        [HttpPost]
        public async Task<ActionResult> CreatePost([FromBody]CreatePostRequestDto dto)
        {
            await _mediator.Send(new CreatePostCommand() { Post = _mapper.Map<Post>(dto) });

            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult<IList<ReadAllPostsResponseDto>>> ReadAllPosts()
        {
            var result = await _mediator.Send(new ReadAllPostsQuery());

            var output = new List<ReadAllPostsResponseDto>();

            result.Posts.ForEach(i => output.Add(_mapper.Map<ReadAllPostsResponseDto>(i)));

            return Ok(output);
        }

        [HttpGet("{postId}")]
        public async Task<ActionResult<ReadPostByIdResponseDto>> ReadPostById([FromRoute]string postId)
        {
            var result = await _mediator.Send(new ReadPostByIdQuery() { Id = Guid.Parse(postId) });

            return Ok(_mapper.Map<ReadPostByIdResponseDto>(result.Post));
        }

        [Authorize(AuthorizationPolicyConstants.AuthenticatedUsersOnlyPolicy)]
        [HttpDelete("{postId}")]
        public async Task<ActionResult> DeletePost([FromRoute]string postId)
        {
            await _mediator.Send(new DeletePostCommand() { Id = Guid.Parse(postId) });

            return Ok();
        }
    }
}