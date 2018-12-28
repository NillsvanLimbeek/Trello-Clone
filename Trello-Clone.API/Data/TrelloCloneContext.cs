using Microsoft.EntityFrameworkCore;
using Trello_Clone.API.Models;

namespace Trello_Clone.API.Data
{
    public class TrelloCloneContext : DbContext
    {
        public DbSet<Board> Boards { get; set; }
        public DbSet<Column> Columns { get; set; }

        public TrelloCloneContext(DbContextOptions<TrelloCloneContext> options) : base(options)
        {
        }
    }
}