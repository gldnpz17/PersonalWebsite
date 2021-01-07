using EFCorePostgres;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Profile.Skills.Commands.DeleteSkill
{
    public class DeleteSkillHandler : IRequestHandler<DeleteSkillCommand>
    {
        private readonly AppDbContext _appDbContext;

        public DeleteSkillHandler(
            AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<Unit> Handle(DeleteSkillCommand request, CancellationToken cancellationToken)
        {
            var profile = await _appDbContext.Profiles.FirstOrDefaultAsync();

            var skill = profile.Skills.FirstOrDefault(i => i.Name == request.Name);

            if (skill == null)
            {
                throw new ApplicationException("Could not find data.");
            }

            profile.Skills.Remove(skill);

            await _appDbContext.SaveChangesAsync();

            return Unit.Value;
        }
    }
}
