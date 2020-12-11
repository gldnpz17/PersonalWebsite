using DomainModel.Services;
using EFCorePostgres;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Blog.Commands.CreatePost
{
    public class CreatePostHandler : IRequestHandler<CreatePostCommand>
    {
        private readonly IDateTimeService _dateTimeService;
        private readonly AppDbContext _appDbContext;

        public CreatePostHandler(
            IDateTimeService dateTimeService,
            AppDbContext appDbContext)
        {
            _dateTimeService = dateTimeService;
            _appDbContext = appDbContext;
        }

        public async Task<Unit> Handle(CreatePostCommand request, CancellationToken cancellationToken)
        {
            request.Post.Id = Guid.NewGuid();
            request.Post.PublishDate = _dateTimeService.GetCurrentDateTime();

            await _appDbContext.Posts.AddAsync(request.Post);

            await _appDbContext.SaveChangesAsync();

            return Unit.Value;
        }
    }
}
