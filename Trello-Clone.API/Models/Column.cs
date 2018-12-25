using System.Collections.Generic;

namespace Trello_Clone.API.Models
{
    public class Column
    {
        public string Title { get; set; }
        public int Id { get; set; }
        public string State { get; set; }
        public Board Board { get; set; }
        public int BoardId { get; set; }
    }
}