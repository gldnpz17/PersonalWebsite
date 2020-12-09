using System;
using System.Collections.Generic;
using System.Text;

namespace DomainModel.Entities
{
    public class Education
    {
        public int Id { get; set; }
        public string Institution { get; set; }
        public string Department { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Description { get; set; }
    }
}
