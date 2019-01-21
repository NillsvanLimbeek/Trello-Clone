using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Trello_Clone.API.Models
{
    public class ColorLabelConfiguration : IEntityTypeConfiguration<ColorLabel>
    {
        public void Configure(EntityTypeBuilder<ColorLabel> builder)
        {
            builder
                .Property(cl => cl.ItemId)
                .IsRequired();
        }
    }
}