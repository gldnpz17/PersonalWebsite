using EFCorePostgres;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Profile.Educations.Commands.CreateEducation
{
    public class CreateEducationHandler : IRequestHandler<CreateEducationCommand>
    {
        private readonly AppDbContext _appDbContext;

        public CreateEducationHandler(
            AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<Unit> Handle(CreateEducationCommand request, CancellationToken cancellationToken)
        {
            var profile = await _appDbContext.Profiles.FirstOrDefaultAsync();

            profile.Educations.Add(request.Education);

            await _appDbContext.SaveChangesAsync();

            return Unit.Value;
        }
    }
}
