using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Application;
using Application.Common.Configuration;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using NSwag.Generation.Processors.Security;
using PersonalWebsite.Common.Auth;
using PersonalWebsite.Common.Mapper;

namespace PersonalWebsite
{
    public class Startup
    {
        private IWebHostEnvironment _env;

        public Startup(
            IWebHostEnvironment env)
        {
            _env = env;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.Configure<ForwardedHeadersOptions>(options =>
            {
                options.KnownProxies.Add(IPAddress.Parse(Environment.GetEnvironmentVariable("PROXY_IP_ADDRESS")));
            });

            //register Nswag
            services.AddSwaggerDocument(
                (config) =>
                {
                    config.DocumentProcessors.Add(
                        new SecurityDefinitionAppender("AuthToken",
                        new NSwag.OpenApiSecurityScheme
                        {
                            Type = NSwag.OpenApiSecuritySchemeType.ApiKey,
                            Name = "Auth-Token",
                            In = NSwag.OpenApiSecurityApiKeyLocation.Header,
                        }));
                    config.OperationProcessors.Add(new OperationSecurityScopeProcessor("AuthToken"));

                    config.PostProcess =
                    (document) =>
                    {
                        document.Info.Version = "v1";
                        document.Info.Title = "gldnpz API";
                        document.Info.Description = "the api for my personal website";
                        document.Info.Contact = new NSwag.OpenApiContact()
                        {
                            Name = "Firdaus Bisma Suryakusuma",
                            Email = "firdausbismasuryakusuma@mail.ugm.ac.id"
                        };
                    };
                });

            //register usecase/application layer mediator
            ApplicationConfig applicationConfig;

            if (_env.IsDevelopment())
            {
                applicationConfig = new ApplicationConfig()
                {
                    Environment = TypeOfEnvironment.Development
                };
            }
            else
            {
                applicationConfig = new ApplicationConfig()
                {
                    Environment = TypeOfEnvironment.Production
                };
            }
            var applicationBootstrapper = new Bootstrapper(applicationConfig);
            services.AddSingleton(typeof(IMediator), applicationBootstrapper.Mediator);

            //register authentication service
            services.AddAuthentication(
                (config) =>
                {
                    config.DefaultScheme = "RandomTokenScheme";
                })
                .AddScheme<RandomTokenAuthenticationSchemeOptions, ValidateRandomTokenAuthenticationHandler>("RandomTokenScheme", (options) => { });

            //register authorization service
            services.AddAuthorization(config =>
            {
                config.AddPolicy(
                    AuthorizationPolicyConstants.AuthenticatedUsersOnlyPolicy,
                    policy => policy.RequireClaim("Username"));
            });

            //register object-object mapper
            var mapperConfig = new AutoMapperConfig();
            services.AddSingleton(typeof(IMapper), new Mapper(mapperConfig.MapperConfiguration));

            services.AddSpaStaticFiles(config =>
            {
                config.RootPath = "ClientApp/build";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseForwardedHeaders(new ForwardedHeadersOptions
            {
                ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
            });

            app.UseAuthentication();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();

            if (env.IsDevelopment())
            {
                app.UseOpenApi();
                app.UseSwaggerUi3();
            }

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer("start");
                }
            });
        }
    }
}
