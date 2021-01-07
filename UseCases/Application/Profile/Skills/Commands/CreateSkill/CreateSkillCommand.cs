using DomainModel.ValueObjects;
using MediatR;

namespace Application.Profile.Skills.Commands.CreateSkill
{
    public class CreateSkillCommand : IRequest
    {
        public Skill Skill { get; set; }
    }
}
