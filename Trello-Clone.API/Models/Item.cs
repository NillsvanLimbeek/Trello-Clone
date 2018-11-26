using System.Collections.Generic;

namespace Trello_Clone.API.Models
{
    public class Item
    {
        public string Title { get; set; }
        public int Id { get; set; }
        public int ColumnId { get; set; }
        public int MyProperty { get; set; }
        public ICollection<Attachment> Attachments { get; set; }
    }
}