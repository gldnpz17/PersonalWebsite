using DomainModel.ValueObjects;
using MediatR;

namespace Application.Profile.Educations.Commands.CreateEducation
{
    public class CreateEducationCommand : IRequest
    {
        public Education Education { get; set; }
    }
}
