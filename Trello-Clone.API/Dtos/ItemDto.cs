using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace Trello_Clone.API.Dtos
{
    public class ItemDto
    {
        [Required]
        [StringLength(255)]
        public string Title { get; set; }
        public int Id { get; set; }

        [Required]
        public int ColumnId { get; set; }
        public ICollection<int> ColorLabels { get; set; }

        public ItemDto()
        {
            ColorLabels = new Collection<int>();
        }
    }
}