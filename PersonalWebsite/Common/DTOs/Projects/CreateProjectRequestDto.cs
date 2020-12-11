using PersonalWebsite.Common.DTOs.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PersonalWebsite.Common.DTOs.Projects
{
    public class CreateProjectRequestDto
    {
        public string ProjectName { get; set; }
        public string SourceCodeUrl { get; set; }
        public string Description { get; set; }
        public List<TagDto> Tags { get; set; }
        public string GfmDetails { get; set; }
    }
}
