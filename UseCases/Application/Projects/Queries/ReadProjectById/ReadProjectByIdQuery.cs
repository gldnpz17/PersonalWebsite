using MediatR;
using System;

namespace Application.Projects.Queries.ReadProjectById
{
    public class ReadProjectByIdQuery : IRequest<ReadProjectByIdResult>
    {
        public Guid Id { get; set; }
    }
}
