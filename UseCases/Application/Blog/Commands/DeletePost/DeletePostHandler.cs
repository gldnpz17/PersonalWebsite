using EFCorePostgres;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Blog.Commands.DeletePost
{
    public class DeletePostHandler : IRequestHandler<DeletePostCommand>
    {
        private readonly AppDbContext _appDbContext;

        public DeletePostHandler(
            AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<Unit> Handle(DeletePostCommand request, CancellationToken cancellationToken)
        {
            var resultPost = await _appDbContext.Posts.FirstOrDefaultAsync(i => i.Id == request.Id);

            if (resultPost == null)
            {
                throw new ApplicationException("No post with the given id was found.");
            }

            _appDbContext.Posts.Remove(resultPost);

            await _appDbContext.SaveChangesAsync();

            return Unit.Value;
        }
    }
}
