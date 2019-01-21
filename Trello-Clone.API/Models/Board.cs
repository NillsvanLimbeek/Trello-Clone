using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Trello_Clone.API.Models
{
    public class Board
    {
        public string Title { get; set; }
        public int Id { get; set; }
        public bool Favorite { get; set; }
        public bool Personal { get; set; }
        public int Color { get; set; }
        public ICollection<Column> Columns { get; set; }
        public Board()
        {
            Columns = new Collection<Column>();
        }
    }
}