using DomainModel.Common;
using System.Collections.Generic;

namespace DomainModel.ValueObjects
{
    public class SkillType : ValueObject
    {
        public virtual string Name { get; set; }

        protected override IEnumerable<object> GetAtomicValues()
        {
            yield return Name;
        }
    }
}
