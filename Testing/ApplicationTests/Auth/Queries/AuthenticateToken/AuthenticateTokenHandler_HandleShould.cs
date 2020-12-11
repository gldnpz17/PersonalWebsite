using Application.Auth.Queries.AuthenticateToken;
using ApplicationTests.Common.Mocks;
using DomainModel.Services;
using Moq;
using NUnit.Framework;
using SimpleDomainServiceImplementation.DateTimeService;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace ApplicationTests.Auth.Queries.AuthenticateToken
{
    [TestFixture]
    public class AuthenticateTokenHandler_HandleShould
    {
        [Test]
        public async Task Handle_InputIsValidData_ValidatesCorrectly()
        {
            var dateTimeServiceMock = new Mock<IDateTimeService>();

            dateTimeServiceMock
                .Setup(i => i.GetCurrentDateTime())
                .Returns(new DateTime(2000, 1, 1));

            var handler = new AuthenticateTokenHandler(
                AppDbContextMockGenerator.GetMock(),
                dateTimeServiceMock.Object);

            var result = await handler.Handle(
                new AuthenticateTokenQuery()
                {
                    Token = "Token1"
                },
                new CancellationToken());

            Assert.True(result.IsValid);
        }
    }
}
