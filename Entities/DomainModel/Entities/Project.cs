using DomainModel.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainModel.Entities
{
    public class Project
    {
        public virtual Guid Id { get; set; }
        public virtual string ProjectName { get; set; }
        public virtual string Status { get; set; }
        public virtual string SourceCodeUrl { get; set; }
        public virtual string Description { get; set; }
        public virtual List<Tag> Tags { get; set; }
        public virtual string GfmDetails { get; set; }
    }
}
