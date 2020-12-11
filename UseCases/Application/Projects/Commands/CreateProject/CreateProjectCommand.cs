using DomainModel.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Projects.Commands.CreateProject
{
    public class CreateProjectCommand : IRequest
    {
        public Project Project { get; set; }
    }
}
