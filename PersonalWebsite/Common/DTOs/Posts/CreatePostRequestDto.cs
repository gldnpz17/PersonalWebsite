using PersonalWebsite.Common.DTOs.Common;
using System.Collections.Generic;

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
