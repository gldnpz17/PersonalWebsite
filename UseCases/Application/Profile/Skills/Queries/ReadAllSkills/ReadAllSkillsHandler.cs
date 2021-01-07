using EFCorePostgres;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Profile.Skills.Queries.ReadAllSkills
{
    public class ReadAllSkillsHandler : IRequestHandler<ReadAllSkillsQuery, ReadAllSkillsResult>
    {
        private readonly AppDbContext _appDbContext;

        public ReadAllSkillsHandler(
            AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<ReadAllSkillsResult> Handle(ReadAllSkillsQuery request, CancellationToken cancellationToken)
        {
            var profile = await _appDbContext.Profiles.FirstOrDefaultAsync();

            return new ReadAllSkillsResult() { Skills = profile.Skills };
        }
    }
}
