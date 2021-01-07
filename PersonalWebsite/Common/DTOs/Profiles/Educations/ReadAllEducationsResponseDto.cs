using System;

namespace PersonalWebsite.Common.DTOs.Profiles.Educations
{
    public class ReadAllEducationsResponseDto
    {
        public string Institution { get; set; }
        public string Department { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Description { get; set; }
    }
}
