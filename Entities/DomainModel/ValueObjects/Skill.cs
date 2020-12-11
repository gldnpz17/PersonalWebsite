using DomainModel.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainModel.ValueObjects
{
    public class Skill : ValueObject
    {
        public SkillType SkillType { get; set; }
        public string Name { get; set; }
        public double Progress { get; set; }
        public string Description { get; set; }

        protected override IEnumerable<object> GetAtomicValues()
        {
            yield return SkillType;
            yield return Name;
            yield return Progress;
            yield return Description;
        }
    }
}
