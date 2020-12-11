using PersonalWebsite.Common.DTOs.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PersonalWebsite.Common.DTOs.Posts
{
    public class CreatePostRequestDto
    {
        public string Title { get; set; }
        public string Summary { get; set; }
        public string GfmContent { get; set; }
        public List<TagDto> Tags { get; set; }
    }
}
