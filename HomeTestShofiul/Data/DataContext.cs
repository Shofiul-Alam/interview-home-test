using HomeTestShofiul.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HomeTestShofiul.Data
{
    public class DataContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB; Database=HomeTestShofiul ;Trusted_Connection=True");
            //options.UseSqlServer(@"Server=tcp:home-test.database.windows.net,1433;Initial Catalog=home-test;Persist Security Info=False;User ID=shofiul;Password=home-test-2018;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");

        }

        public DbSet<Project> Projects { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<ProjectContact> ProjectsContacts { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            //Composite Primary key
            builder.Entity<ProjectContact>()
                    .HasKey(t => new { t.ProjectId, t.ContactId });

            //now creating many to many relationship 
            builder.Entity<ProjectContact>()
                    .HasOne(p => p.Project)
                    .WithMany(x => x.Contacts)
                    .HasForeignKey(y => y.ProjectId);

            builder.Entity<ProjectContact>()
                    .HasOne(s => s.Contact)
                    .WithMany(c => c.Projects)
                    .HasForeignKey(z => z.ContactId);

        }
    }
}
