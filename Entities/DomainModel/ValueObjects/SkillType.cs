using DomainModel.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
