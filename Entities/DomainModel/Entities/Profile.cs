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
        public Guid Id { get; set; }
        public List<Education> Educations { get; set; }
        public List<Skill> Skills { get; set; }
    }
}
