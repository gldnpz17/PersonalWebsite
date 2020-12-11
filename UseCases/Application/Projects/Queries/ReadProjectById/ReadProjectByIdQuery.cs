using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Projects.Queries.ReadProjectById
{
    public class ReadProjectByIdQuery : IRequest<ReadProjectByIdResult>
    {
        public Guid Id { get; set; }
    }
}
