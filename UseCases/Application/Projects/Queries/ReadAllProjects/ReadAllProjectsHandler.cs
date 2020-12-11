using EFCorePostgres;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Projects.Queries.ReadAllProjects
{
    public class ReadAllProjectsHandler : IRequestHandler<ReadAllProjectsQuery, ReadAllProjectsResult>
    {
        private readonly AppDbContext _appDbContext;

        public ReadAllProjectsHandler(
            AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<ReadAllProjectsResult> Handle(ReadAllProjectsQuery request, CancellationToken cancellationToken)
        {
            var result = await _appDbContext.Projects.ToListAsync();

            return new ReadAllProjectsResult() { Projects = result };
        }
    }
}
