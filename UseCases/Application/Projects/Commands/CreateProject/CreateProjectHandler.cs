using DomainModel.Services;
using EFCorePostgres;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Projects.Commands.CreateProject
{
    public class CreateProjectHandler : IRequestHandler<CreateProjectCommand>
    {
        private readonly AppDbContext _appDbContext;
        private readonly IDateTimeService _dateTimeService;

        public CreateProjectHandler(
            AppDbContext appDbContext,
            IDateTimeService dateTimeService)
        {
            _appDbContext = appDbContext;
            _dateTimeService = dateTimeService;
        }

        public async Task<Unit> Handle(CreateProjectCommand request, CancellationToken cancellationToken)
        {
            request.Project.Id = Guid.NewGuid();

            await _appDbContext.Projects.AddAsync(request.Project);

            await _appDbContext.SaveChangesAsync();

            return Unit.Value;
        }
    }
}
