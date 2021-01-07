using DomainModel.Entities;
using EFCorePostgres;
using Microsoft.EntityFrameworkCore;

namespace InMemoryEFCore
{
    public class InMemoryAppDbContext : AppDbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase(databaseName: "AppDb");
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
