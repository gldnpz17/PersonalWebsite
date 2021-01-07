using DomainModel.ValueObjects;
using System.Collections.Generic;

namespace Application.Profile.Skills.Queries.ReadAllSkills
{
    public class ReadAllSkillsResult
    {
        public List<Skill> Skills { get; set; }
    }
}
