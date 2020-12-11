using DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Projects.Queries.ReadAllProjects
{
    public class ReadAllProjectsResult
    {
        public List<Project> Projects { get; set; }
    }
}
