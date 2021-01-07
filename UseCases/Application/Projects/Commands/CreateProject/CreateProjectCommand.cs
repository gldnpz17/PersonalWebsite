using DomainModel.Entities;
using MediatR;

namespace Application.Projects.Commands.CreateProject
{
    public class CreateProjectCommand : IRequest
    {
        public Project Project { get; set; }
    }
}
