using DomainModel.Entities;
using MediatR;

namespace Application.Blog.Commands.CreatePost
{
    public class CreatePostCommand : IRequest
    {
        public Post Post { get; set; }
    }
}
