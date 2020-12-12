using Application.Common.Configuration;
using Autofac;
using AutoMapper;
using DomainModel.Entities;
using DomainModel.Services;
using DomainModel.ValueObjects;
using EFCorePostgres;
using InMemoryEFCore;
using MediatR;
using MediatR.Extensions.Autofac.DependencyInjection;
using SimpleDomainServiceImplementation.AlphanumericTokenGenerator;
using SimpleDomainServiceImplementation.DateTimeService;
using SimpleDomainServiceImplementation.PasswordHashingService;
using SimpleDomainServiceImplementation.PasswordResetMessageSenderImplementation;
using SimpleDomainServiceImplementation.SecureRng;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Application
{
    public class Bootstrapper
    {
        public IMediator Mediator { get; }

        private IContainer _container;
        private ApplicationConfig _config;

        private ILifetimeScope _scope;

        public Bootstrapper(ApplicationConfig config)
        {
            _config = config;

            RegisterDependencies();

            _scope = _container.BeginLifetimeScope();

            Mediator = _scope.Resolve<IMediator>();
        }

        private void RegisterDependencies()
        {
            var builder = new ContainerBuilder();

            //register config
            builder.RegisterInstance(_config);

            //register mediator components
            builder.RegisterMediatR(Assembly.GetExecutingAssembly());

            //register request handlers
            builder.RegisterAssemblyTypes(Assembly.GetExecutingAssembly())
                .Where(t => t.IsAssignableFrom(typeof(IRequestHandler<>)))
                .AsSelf();

            //register domain service implementations
            builder.RegisterType<AlphanumericTokenGeneratorImplementation>().As<IAlphanumericTokenGenerator>().SingleInstance();
            builder.RegisterType<DateTimeServiceImplementation>().As<IDateTimeService>().SingleInstance();
            builder.RegisterType<PasswordHashingServiceImplementation>().As<IPasswordHashingService>().SingleInstance();
            builder.RegisterType<PasswordResetMessageSenderImplementation>().As<IPasswordResetMessageSender>().SingleInstance();
            builder.RegisterType<SecureRngImplementation>().As<ISecureRng>().SingleInstance();

            //register database
            if (_config.Environment == TypeOfEnvironment.Development)
            {
                var dbContext = new InMemoryAppDbContext();

                dbContext.Accounts.Add(
                    new Account()
                    {
                        Username = "admin",
                        EmailAddress = "admin@mail.com",
                        PasswordCredential = new PasswordCredential() { HashedPassword = "2C3ZkIwZfWmlXu0uXeQM96ZQXGWZbYV2WAeuNYYZgzQ0Z4FTlpU0HxfKzFb3NIA703OAutgdUB9OnhDv+0dQE2GtAJNiqN3eFxd7VYCMQ0fRmJCKhy2aTp3JqqWwAc4Br4k8uNVTcGQ9z0L2NaPB9kKZ6fSj4oUDjxtv6MZzW18oUowyNtGXFtVhmTGML4bg8iPURA2yQMSzXcWgha/j68nzN7f8Ct6JpmW0E4W1b8lJ2LhyEGYwWhoArWXpnj3zroNkFCMBPI96jmlHMicqD086MecCrOcJJL/x2CfX5vCFRC9wiVwapF8tQqvuxo7xv4jHADGWStsef8NIcATrbw==", Salt = "tkDckBUZcXp3NTxpboOStZKbdGzqC+7jA0o8FxfMZYm24nWDc7K/tRFlsEOs1qKwbFRj5+LPBHHUcmS66C7PdQ==" },
                        AuthTokens = new List<AuthToken>(),
                        PasswordResetTokens = new List<PasswordResetToken>()
                    });

                dbContext.Profiles.Add(
                    new DomainModel.Entities.Profile()
                    {
                        Id = Guid.NewGuid(),
                        Educations = new List<Education>(),
                        Skills = new List<Skill>()
                    });

                dbContext.SaveChanges();

                builder.RegisterType<InMemoryAppDbContext>().As<AppDbContext>().InstancePerDependency();
            }

            _container = builder.Build();
        }
    }
}
