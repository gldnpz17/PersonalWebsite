using EFCorePostgres;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Projects.Queries.ReadProjectById
{
    public class ReadProjectByIdHandler : IRequestHandler<ReadProjectByIdQuery, ReadProjectByIdResult>
    {
        private readonly AppDbContext _appDbContext;

        public ReadProjectByIdHandler(
            AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<ReadProjectByIdResult> Handle(ReadProjectByIdQuery request, CancellationToken cancellationToken)
        {
            var result = await _appDbContext.Projects.FirstOrDefaultAsync(i => i.Id == request.Id);

            if (result == null)
            {
                throw new ApplicationException("Couldn't find data.");
            }

            return new ReadProjectByIdResult() { Project = result };
        }
    }
}
