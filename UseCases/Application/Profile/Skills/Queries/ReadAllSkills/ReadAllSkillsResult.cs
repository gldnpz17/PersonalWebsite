using DomainModel.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Profile.Skills.Queries.ReadAllSkills
{
    public class ReadAllSkillsResult
    {
        public List<Skill> Skills { get; set; }
    }
}
