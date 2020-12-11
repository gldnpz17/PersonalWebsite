using DomainModel.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainModel.ValueObjects
{
    public class Education : ValueObject
    {
        public string Institution { get; set; }
        public string Department { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Description { get; set; }

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
