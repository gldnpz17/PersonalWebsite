using EFCorePostgres;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Blog.Queries.ReadPostById
{
    public class ReadPostByIdHandler : IRequestHandler<ReadPostByIdQuery, ReadPostByIdResult>
    {
        private readonly AppDbContext _appDbContext;

        public ReadPostByIdHandler(
            AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<ReadPostByIdResult> Handle(ReadPostByIdQuery request, CancellationToken cancellationToken)
        {
            var resultPost = await _appDbContext.Posts.FirstOrDefaultAsync(i => i.Id == request.Id);

            return new ReadPostByIdResult() { Post = resultPost };
        }
    }
}
