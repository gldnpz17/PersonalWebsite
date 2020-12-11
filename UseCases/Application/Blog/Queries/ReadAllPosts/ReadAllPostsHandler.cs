using EFCorePostgres;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Blog.Queries.ReadAllPosts
{
    public class ReadAllPostsHandler : IRequestHandler<ReadAllPostsQuery, ReadAllPostsResult>
    {
        private readonly AppDbContext _appDbContext;

        public ReadAllPostsHandler(
            AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<ReadAllPostsResult> Handle(ReadAllPostsQuery request, CancellationToken cancellationToken)
        {
            var resultPosts = await _appDbContext.Posts.ToListAsync();

            return new ReadAllPostsResult() { Posts = resultPosts };
        }
    }
}
