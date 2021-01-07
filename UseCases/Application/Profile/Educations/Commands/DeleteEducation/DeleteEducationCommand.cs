using MediatR;

namespace Application.Profile.Educations.Commands.DeleteEducation
{
    public class DeleteEducationCommand : IRequest
    {
        public string Institution { get; set; }
        public string Department { get; set; }
    }
}
