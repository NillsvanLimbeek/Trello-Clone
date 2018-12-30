using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Trello_Clone.API.Dtos
{
    public class BoardDto
    {
        public string Title { get; set; }
        public int Id { get; set; }
        public bool Favorite { get; set; }
        public int Color { get; set; }
        public ICollection<int> Columns { get; set; }

        public BoardDto()
        {
            Columns = new Collection<int>();
        }
    }
}