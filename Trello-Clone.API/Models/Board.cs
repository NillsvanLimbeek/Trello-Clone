using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Trello_Clone.API.Enums;

namespace Trello_Clone.API.Models
{
    public class Board
    {
        public string Title { get; set; }
        public int Id { get; set; }
        public bool Favorite { get; set; }
        public bool Personal { get; set; }
        public int Color { get; set; }
        public DateTime CreatedAt { get; set; }
        public ICollection<Column> Columns { get; set; }

        public Board()
        {
            Columns = new Collection<Column>();
        }

        // todo
        // public Access Access { get; set; }
        // public ICollection<Team> Teams { get; set; }
        // public ICollection<Member> Members { get; set; }
    }
}