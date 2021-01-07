using DomainModel.Entities;
using DomainModel.ValueObjects;
using EFCorePostgres;
using InMemoryEFCore;
using System;
using System.Collections.Generic;

namespace ApplicationTests.Common.Mocks
{
    internal static class AppDbContextMockGenerator
    {
        internal static AppDbContext GetMock()
        {
            var mock = new InMemoryAppDbContext();

            mock.Accounts.Add(
                new Account()
                {
                    Username = "Account1",
                    EmailAddress = "Account1@mail.com",
                    PasswordCredential = new PasswordCredential() { HashedPassword = "HashedPassword1", Salt = "Salt1" },
                    AuthTokens = new List<AuthToken>() 
                    {
                        new AuthToken() { Token = "Token1", CreatedAt = new DateTime(2000, 1, 1) }
                    },
                    PasswordResetTokens = new List<PasswordResetToken>()
                });

            mock.Profiles.Add(
                new Profile()
                {
                    Id = Guid.NewGuid(),
                    Educations = new List<Education>()
                    {
                        new Education()
                        {
                            Institution = "Institution1",
                            Department = "Department1",
                            Description = "Description1",
                            StartDate = new DateTime(2000, 1, 1),
                            EndDate = new DateTime(2001, 1, 1)
                        }
                    },
                    Skills = new List<Skill>()
                    {
                        new Skill()
                        {
                            Name = "Skill1",
                            Description = "Description1",
                            Progress = 1,
                            SkillType = new SkillType(){ Name = "SkillType1" }
                        }
                    }
                });

            mock.SaveChanges();

            return mock;
        }
    }
}
