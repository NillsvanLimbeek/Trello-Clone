using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Trello_Clone.API.Models
{
    public class ColumnConfiguration : IEntityTypeConfiguration<Column>
    {
        public void Configure(EntityTypeBuilder<Column> builder)
        {
            builder
                .Property(c => c.Title)
                .HasMaxLength(255)
                .IsRequired();

            builder
                .Property(c => c.BoardId)
                .IsRequired();
        }
    }
}