using Application.Profile.Educations.Commands.DeleteEducation;
using ApplicationTests.Common.Mocks;
using NUnit.Framework;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationTests.Profiles.Commands.DeleteEducation
{
    [TestFixture]
    public class DeleteEducationHandler_HandleShould
    {
        [Test]
        public async Task Handle_InputIsValidData_DeleteFromDatabase()
        {
            var dbMock = AppDbContextMockGenerator.GetMock();
            var handler = new DeleteEducationHandler(dbMock);

            await handler.Handle(
                new DeleteEducationCommand()
                {
                    Department = "Department1",
                    Institution = "Institution1"
                },
                new System.Threading.CancellationToken());

            Assert.True(!dbMock.Profiles.FirstOrDefault()
                .Educations.Any(i => i.Department == "Department1" && i.Institution == "Institution1"));
        }
    }
}
