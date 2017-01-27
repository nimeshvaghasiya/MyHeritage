using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using MyHeritage.Model;

namespace MyHeritage.Data
{
    public class MyHeritageContext : DbContext
    {
        public DbSet<TreeMemberHeritage> TreeMemberHeritages { get; set; }
        public DbSet<TreeRelationMaster> TreeRelationMasters { get; set; }      

        public MyHeritageContext(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            foreach (var relationship in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
            {
                relationship.DeleteBehavior = DeleteBehavior.Restrict;
            }

            modelBuilder.Entity<TreeMemberHeritage>().ToTable("TreeMemberHeritages").HasKey("TreeMemberId");
            modelBuilder.Entity<TreeRelationMaster>().ToTable("TreeRelationMaster").HasKey("RelationId");            
        }
    }
}
