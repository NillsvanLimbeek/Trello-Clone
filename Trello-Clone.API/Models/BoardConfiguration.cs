using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Trello_Clone.API.Models
{
    public class BoardConfiguration : IEntityTypeConfiguration<Board>
    {
        public void Configure(EntityTypeBuilder<Board> builder)
        {
            builder
                .Property(b => b.Title)
                .HasMaxLength(255)
                .IsRequired();
            builder
                .Property(b => b.Color)
                .HasDefaultValue(0)
                .IsRequired();
        }
    }
}