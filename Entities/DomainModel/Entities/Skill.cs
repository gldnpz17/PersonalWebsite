using DomainModel.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainModel.Entities
{
    public class Skill
    {
        public SkillType SkillType { get; set; }
        public string Name { get; set; }
        public double Progress { get; set; }
        public string Description { get; set; }
    }
}
