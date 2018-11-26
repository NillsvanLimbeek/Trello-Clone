using System;
using System.Collections.Generic;

namespace Trello_Clone.API.Models
{
    public class Board
    {
        public string Title { get; set; }
        public int Id { get; set; }
        public bool Favorite { get; set; }
        public bool Personal { get; set; }
        public string Color { get; set; }
        public DateTime CreatedAt { get; set; }
        public ICollection<Column> Columns { get; set; }
    }
}