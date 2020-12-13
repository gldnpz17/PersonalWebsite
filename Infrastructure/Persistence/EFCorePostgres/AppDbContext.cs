using DomainModel.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFCorePostgres
{
    public class AppDbContext : DbContext
    {
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Project> Projects { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
            optionsBuilder.UseNpgsql(Environment.GetEnvironmentVariable("DATABASE_CONNECTION_STRING"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<Account>(
                (b) =>
                {
                    b.HasKey(e => e.Username);

                    b.OwnsOne(e => e.PasswordCredential);

                    b.OwnsMany(e => e.AuthTokens);

                    b.OwnsMany(e => e.PasswordResetTokens);
                });

            modelBuilder
                .Entity<Profile>(
                (b) =>
                {
                    b.OwnsMany(e => e.Educations,
                        education => education.HasKey(e => new { e.Institution, e.Department }));

                    b.OwnsMany(e => e.Skills,
                        skill =>
                        {
                            skill.OwnsOne(e => e.SkillType);
                            skill.HasKey(e => e.Name);
                        });
                });

            modelBuilder
                .Entity<Post>(
                (b) =>
                {
                    b.OwnsMany(e => e.Tags);
                });

            modelBuilder
                .Entity<Project>(
                (b) =>
                {
                    b.OwnsMany(e => e.Tags);
                });
        }
    }
}
