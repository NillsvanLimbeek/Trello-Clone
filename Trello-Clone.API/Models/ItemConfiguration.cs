using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Trello_Clone.API.Models
{
    public class ItemConfiguration : IEntityTypeConfiguration<Item>
    {
        public void Configure(EntityTypeBuilder<Item> builder)
        {
            builder
                .Property(i => i.Title)
                .HasMaxLength(255)
                .IsRequired();

            builder
                .Property(i => i.ColumnId)
                .IsRequired();
        }
    }
}