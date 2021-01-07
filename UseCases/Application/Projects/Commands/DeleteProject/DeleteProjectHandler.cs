using EFCorePostgres;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Projects.Commands.DeleteProject
{
    public class DeleteProjectHandler : IRequestHandler<DeleteProjectCommand>
    {
        private readonly AppDbContext _appDbContext;

        public DeleteProjectHandler(
            AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<Unit> Handle(DeleteProjectCommand request, CancellationToken cancellationToken)
        {
            var result = await _appDbContext.Projects.FirstOrDefaultAsync(i => i.Id == request.Id);

            if (result == null)
            {
                throw new ApplicationException("Couldn't find data.");
            }

            _appDbContext.Projects.Remove(result);

            await _appDbContext.SaveChangesAsync();

            return Unit.Value;
        }
    }
}
