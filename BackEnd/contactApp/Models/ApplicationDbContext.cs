using Microsoft.EntityFrameworkCore;

namespace contactApp.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> context)
         : base(context)
        {

        }

        public DbSet<Person> People { get; set; }

    }
}