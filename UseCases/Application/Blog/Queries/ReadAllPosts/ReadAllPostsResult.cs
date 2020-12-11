using DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Blog.Queries.ReadAllPosts
{
    public class ReadAllPostsResult
    {
        public List<Post> Posts { get; set; }
    }
}
