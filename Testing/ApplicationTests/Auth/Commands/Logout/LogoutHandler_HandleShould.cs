using Application.Auth.Commands.Logout;
using ApplicationTests.Common.Mocks;
using NUnit.Framework;
using System.Threading;

namespace ApplicationTests.Auth.Commands.Logout
{
    [TestFixture]
    public class LogoutHandler_HandleShould
    {
        [SetUp]
        public void SetUp()
        {

        }

        [Test]
        public void Handle_InputIsRegularData_ShouldntThrowException()
        {
            var handler = new LogoutHandler(AppDbContextMockGenerator.GetMock());

            Assert.DoesNotThrowAsync(
                async () =>
                {
                    await handler.Handle(
                        new LogoutCommand()
                        {
                            Token = "Token1"
                        },
                        new CancellationToken());
                });
        }
    }
}
