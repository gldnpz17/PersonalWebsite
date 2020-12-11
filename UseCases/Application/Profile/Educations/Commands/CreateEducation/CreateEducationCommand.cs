using DomainModel.ValueObjects;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Cache;
using System.Text;
using System.Threading.Tasks;

namespace Application.Profile.Educations.Commands.CreateEducation
{
    public class CreateEducationCommand : IRequest
    {
        public Education Education { get; set; }
    }
}
