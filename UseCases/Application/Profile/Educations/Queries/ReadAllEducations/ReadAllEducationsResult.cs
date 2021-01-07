using DomainModel.ValueObjects;
using System.Collections.Generic;

namespace Application.Profile.Educations.Queries.ReadAllEducations
{
    public class ReadAllEducationsResult
    {
        public List<Education> Educations { get; set; }
    }
}
