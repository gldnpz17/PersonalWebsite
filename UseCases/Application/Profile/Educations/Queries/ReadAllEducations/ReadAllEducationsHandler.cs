using EFCorePostgres;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Profile.Educations.Queries.ReadAllEducations
{
    public class ReadAllEducationsHandler : IRequestHandler<ReadAllEducationsQuery, ReadAllEducationsResult>
    {
        private readonly AppDbContext _appDbContext;

        public ReadAllEducationsHandler(
            AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<ReadAllEducationsResult> Handle(ReadAllEducationsQuery request, CancellationToken cancellationToken)
        {
            var profile = await _appDbContext.Profiles.FirstOrDefaultAsync();

            return new ReadAllEducationsResult() { Educations = profile.Educations };
        }
    }
}
