using DomainModel.Entities;
using System.Collections.Generic;

namespace Application.Blog.Queries.ReadAllPosts
{
    public class ReadAllPostsResult
    {
        public List<Post> Posts { get; set; }
    }
}
