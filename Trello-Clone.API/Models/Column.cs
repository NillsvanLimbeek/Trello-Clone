using System.Collections.Generic;

namespace Trello_Clone.API.Models
{
    public class Column
    {
        public string Title { get; set; }
        public int Id { get; set; }
        public string State { get; set; }
        public int BoardId { get; set; }
        public ICollection<Column> Columns { get; set; }
    }
}