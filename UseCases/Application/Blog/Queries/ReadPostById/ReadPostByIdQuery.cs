using MediatR;
using System;

namespace Application.Blog.Queries.ReadPostById
{
    public class ReadPostByIdQuery : IRequest<ReadPostByIdResult>
    {
        public Guid Id { get; set; }
    }
}
