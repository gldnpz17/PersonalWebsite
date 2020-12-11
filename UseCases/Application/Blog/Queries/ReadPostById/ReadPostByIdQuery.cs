using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Blog.Queries.ReadPostById
{
    public class ReadPostByIdQuery : IRequest<ReadPostByIdResult>
    {
        public Guid Id { get; set; }
    }
}
