using MediatR;

namespace Application.Profile.Skills.Commands.DeleteSkill
{
    public class DeleteSkillCommand : IRequest
    {
        public string Name { get; set; }
    }
}
