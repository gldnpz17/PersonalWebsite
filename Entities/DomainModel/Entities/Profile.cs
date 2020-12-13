using DomainModel.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainModel.Entities
{
    public class Profile
    {
        public virtual Guid Id { get; set; }
        public virtual List<Education> Educations { get; set; }
        public virtual List<Skill> Skills { get; set; }
    }
}
