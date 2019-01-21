using Microsoft.EntityFrameworkCore;
using Trello_Clone.API.Models;

namespace Trello_Clone.API.Data
{
    public class TrelloCloneContext : DbContext
    {
        public DbSet<Board> Boards { get; set; }
        public DbSet<Column> Columns { get; set; }
        public DbSet<Item> Items { get; set; }

        public TrelloCloneContext(DbContextOptions<TrelloCloneContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new BoardConfiguration());
            modelBuilder.ApplyConfiguration(new ColumnConfiguration());
            modelBuilder.ApplyConfiguration(new ItemConfiguration());
            modelBuilder.ApplyConfiguration(new ColorLabelConfiguration());

            // one to many
            modelBuilder.Entity<Item>()
                .HasMany(i => i.ColorLabels)
                .WithOne(c => c.Item);
        }
    }
}