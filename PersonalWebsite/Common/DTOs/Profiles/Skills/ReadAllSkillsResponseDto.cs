using PersonalWebsite.Common.DTOs.Common;

namespace PersonalWebsite.Common.DTOs.Profiles.Skills
{
    public class ReadAllSkillsResponseDto
    {
        public SkillTypeDto SkillType { get; set; }
        public string Name { get; set; }
        public double Progress { get; set; }
        public string Description { get; set; }
    }
}
