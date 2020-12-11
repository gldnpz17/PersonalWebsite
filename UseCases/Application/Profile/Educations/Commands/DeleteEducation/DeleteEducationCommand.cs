using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Profile.Educations.Commands.DeleteEducation
{
    public class DeleteEducationCommand : IRequest
    {
        public string Institution { get; set; }
        public string Department { get; set; }
    }
}
