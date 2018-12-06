using System;
using System.Collections.Generic;
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
        public Access Access { get; set; }
        public ICollection<Column> Columns { get; set; }

        // todo
        // public ICollection<Team> Teams { get; set; }
        // public ICollection<Member> Members { get; set; }
    }
}