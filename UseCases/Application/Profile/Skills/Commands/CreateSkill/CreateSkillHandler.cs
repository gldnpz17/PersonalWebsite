using EFCorePostgres;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Profile.Skills.Commands.CreateSkill
{
    public class CreateSkillHandler : IRequestHandler<CreateSkillCommand>
    {
        private readonly AppDbContext _appDbContext;

        public CreateSkillHandler(
            AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<Unit> Handle(CreateSkillCommand request, CancellationToken cancellationToken)
        {
            var profile = await _appDbContext.Profiles.FirstOrDefaultAsync();

            profile.Skills.Add(request.Skill);

            await _appDbContext.SaveChangesAsync();

            return Unit.Value;
        }
    }
}
