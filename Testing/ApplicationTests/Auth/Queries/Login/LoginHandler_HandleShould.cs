using Application.Auth.Queries.Login;
using ApplicationTests.Common.Mocks;
using DomainModel.Entities;
using DomainModel.Services;
using DomainModel.ValueObjects;
using InMemoryEFCore;
using Moq;
using NUnit.Framework;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace ApplicationTests.Auth.Queries.Login
{
    [TestFixture]
    public class LoginHandler_HandleShould
    {
        private Mock<IAlphanumericTokenGenerator> _alphanumericTokenGeneratorMock = new Mock<IAlphanumericTokenGenerator>();
        private Mock<IDateTimeService> _dateTimeServiceMock = new Mock<IDateTimeService>();
        private Mock<IPasswordHashingService> _passwordHashingServiceMock = new Mock<IPasswordHashingService>();

        [SetUp]
        public void SetUp()
        {
            _alphanumericTokenGeneratorMock
                .Setup(m => m.GenerateAlphanumericToken(16))
                .Returns("XXXXXXXXXXXXXXXX");

            _dateTimeServiceMock
                .Setup(m => m.GetCurrentDateTime())
                .Returns(new DateTime(2000, 1, 1));

            _passwordHashingServiceMock
                .Setup(m => m.HashPassword("Password1", "Salt1"))
                .Returns("HashedPassword1");
        }

        [Test]
        public void Handle_InputIsRegularData_ShouldntThrowException()
        {
            var mockDb = AppDbContextMockGenerator.GetMock();

            var loginHandler =
                new LoginHandler(
                    mockDb,
                    _alphanumericTokenGeneratorMock.Object,
                    _dateTimeServiceMock.Object,
                    _passwordHashingServiceMock.Object);

            Assert.DoesNotThrowAsync(
                async () =>
                {
                    await loginHandler.Handle(
                        new LoginQuery()
                        {
                            Username = "Account1",
                            Password = "Password1"
                        },
                        new CancellationToken());
                });
        }

        [Test]
        public async Task Handle_InputIsRegularData_ShouldAddTokenToDatabase()
        {
            var mockDb = AppDbContextMockGenerator.GetMock();

            var loginHandler =
                new LoginHandler(
                    mockDb,
                    _alphanumericTokenGeneratorMock.Object,
                    _dateTimeServiceMock.Object,
                    _passwordHashingServiceMock.Object);

            await loginHandler.Handle(
                new LoginQuery()
                {
                    Username = "Account1",
                    Password = "Password1"
                },
                new CancellationToken());

            var account = mockDb.Accounts.FirstOrDefault(i => i.Username == "Account1");

            Assert.True(account.AuthTokens.FirstOrDefault(i => i.Token == "XXXXXXXXXXXXXXXX") != null);
        }
    }
}
