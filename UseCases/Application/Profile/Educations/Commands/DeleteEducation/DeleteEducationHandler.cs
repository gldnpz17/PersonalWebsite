using EFCorePostgres;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Profile.Educations.Commands.DeleteEducation
{
    public class DeleteEducationHandler : IRequestHandler<DeleteEducationCommand>
    {
        private readonly AppDbContext _appDbContext;

        public DeleteEducationHandler(
            AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<Unit> Handle(DeleteEducationCommand request, CancellationToken cancellationToken)
        {
            var profile = await _appDbContext.Profiles.FirstOrDefaultAsync();

            var education = profile.Educations.FirstOrDefault(i => i.Institution == request.Institution && i.Department == request.Department);

            if (education == null)
            {
                throw new ApplicationException("could not find data.");
            }

            profile.Educations.Remove(education);

            await _appDbContext.SaveChangesAsync();

            return Unit.Value;
        }
    }
}
