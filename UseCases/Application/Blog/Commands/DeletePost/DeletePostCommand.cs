using MediatR;
using System;

namespace Application.Blog.Commands.DeletePost
{
    public class DeletePostCommand : IRequest
    {
        public Guid Id { get; set; }
    }
}
