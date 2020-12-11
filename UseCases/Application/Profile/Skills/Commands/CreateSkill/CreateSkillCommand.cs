using DomainModel.ValueObjects;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Profile.Skills.Commands.CreateSkill
{
    public class CreateSkillCommand : IRequest
    {
        public Skill Skill { get; set; }
    }
}
