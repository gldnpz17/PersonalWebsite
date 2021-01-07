using PersonalWebsite.Common.DTOs.Common;
using System;
using System.Collections.Generic;

namespace PersonalWebsite.Common.DTOs.Posts
{
    public class ReadAllPostsResponseDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Summary { get; set; }
        public DateTime PublishDate { get; set; }
        public List<TagDto> Tags { get; set; }
    }
}
