using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace Trello_Clone.API.Models
{
    public class Item
    {
        public int Id { get; set; }

        [Required]
        [StringLength(255)]
        public string Title { get; set; }
        public Column Column { get; set; }
        public int ColumnId { get; set; }

        public ICollection<ColorLabel> ColorLabels { get; set; }
        // public ICollection<Comment> Comments { get; set; }
        // public ICollection<Activity> Activities { get; set; }

        public Item()
        {
            ColorLabels = new Collection<ColorLabel>();
            // Comments = new Collection<Comment>();
            // Activities = new Collection<Activity>();
        }
    }
}