using System.Collections.Generic;

namespace Trello_Clone.API.Models
{
    public class Item
    {
        public string Title { get; set; }
        public int Id { get; set; }
        public Column Column { get; set; }
        public int ColumnId { get; set; }
        public ICollection<Attachment> Attachments { get; set; }
        public ICollection<ColorLabel> ColorLabels { get; set; }
    }
}