using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Profile.Skills.Commands.DeleteSkill
{
    public class DeleteSkillCommand : IRequest
    {
        public string Name { get; set; }
    }
}
