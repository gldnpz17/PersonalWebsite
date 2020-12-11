using DomainModel.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Profile.Educations.Queries.ReadAllEducations
{
    public class ReadAllEducationsResult
    {
        public List<Education> Educations { get; set; }
    }
}
