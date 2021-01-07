using DomainModel.Common;
using System;
using System.Collections.Generic;

namespace DomainModel.ValueObjects
{
    public class Education : ValueObject
    {
        public virtual string Institution { get; set; }
        public virtual string Department { get; set; }
        public virtual DateTime StartDate { get; set; }
        public virtual DateTime EndDate { get; set; }
        public virtual string Description { get; set; }

        protected override IEnumerable<object> GetAtomicValues()
        {
            yield return Institution;
            yield return Department;
            yield return StartDate;
            yield return EndDate;
            yield return Description;
        }
    }
}
