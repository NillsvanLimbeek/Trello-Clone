using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace Trello_Clone.API.Dtos
{
    public class ColumnDto
    {
        [Required]
        [StringLength(255)]
        public string Title { get; set; }
        public int Id { get; set; }

        [Required]
        public int BoardId { get; set; }
        public ICollection<int> Items { get; set; }

        public ColumnDto()
        {
            Items = new Collection<int>();
        }
    }
}