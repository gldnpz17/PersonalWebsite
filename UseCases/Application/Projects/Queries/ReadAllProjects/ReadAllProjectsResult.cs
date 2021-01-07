using DomainModel.Entities;
using System.Collections.Generic;

namespace Application.Projects.Queries.ReadAllProjects
{
    public class ReadAllProjectsResult
    {
        public List<Project> Projects { get; set; }
    }
}
