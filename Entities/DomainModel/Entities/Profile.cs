using DomainModel.ValueObjects;
using System;
using System.Collections.Generic;

namespace DomainModel.Entities
{
    public class Profile
    {
        public virtual Guid Id { get; set; }
        public virtual List<Education> Educations { get; set; }
        public virtual List<Skill> Skills { get; set; }
    }
}
