using System;
using System.Collections.Generic;
using Trello_Clone.API.Enums;
using Trello_Clone.API.Models;

namespace Trello_Clone.API.Dtos
{
    public class BoardsForDetailDto
    {
        public string Title { get; set; }
        public int Id { get; set; }
        public bool Favorite { get; set; }
        public int Color { get; set; }
        public Access Access { get; set; }
        public ICollection<Column> Columns { get; set; }

        // todo
        // public ICollection<Team> Teams { get; set; }
        // public ICollection<Member> Members { get; set; }
    }
}