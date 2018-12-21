using Microsoft.EntityFrameworkCore;
using Trello_Clone.API.Models;

namespace Trello_Clone.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Board> Boards { get; set; }
        // public DbSet<Column> Columns { get; set; }
        // public DbSet<Item> Items { get; set; }
        // public DbSet<ColorLabel> ColorLabels { get; set; }
        // public DbSet<Attachment> Attachments { get; set; }
    }
}