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
        public Guid Id { get; set; }
        public string ProjectName { get; set; }
        public string SourceCodeUrl { get; set; }
        public string Description { get; set; }
        public List<Tag> Tags { get; set; }
        public string GfmDetails { get; set; }
    }
}
