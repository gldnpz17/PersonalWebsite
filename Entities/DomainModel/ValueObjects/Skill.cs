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
        public virtual SkillType SkillType { get; set; }
        public virtual string Name { get; set; }
        public virtual double Progress { get; set; }
        public virtual string Description { get; set; }

        protected override IEnumerable<object> GetAtomicValues()
        {
            yield return SkillType;
            yield return Name;
            yield return Progress;
            yield return Description;
        }
    }
}
