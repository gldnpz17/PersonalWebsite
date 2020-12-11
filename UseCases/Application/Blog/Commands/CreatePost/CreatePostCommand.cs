using DomainModel.Entities;
using DomainModel.ValueObjects;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Blog.Commands.CreatePost
{
    public class CreatePostCommand : IRequest
    {
        public Post Post { get; set; }
    }
}
