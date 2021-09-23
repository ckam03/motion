using Microsoft.EntityFrameworkCore;

namespace motionapi.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options ) : base(options) 
        {

        }
        public DbSet<TodoList> TodoLists { get; set; }
        public DbSet<Note> Notes { get; set; }
        public DbSet<Image> Images { get; set; }
    
    }
}