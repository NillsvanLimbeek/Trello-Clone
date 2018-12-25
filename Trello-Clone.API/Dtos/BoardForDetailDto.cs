using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Trello_Clone.API.Enums;
using Trello_Clone.API.Models;

namespace Trello_Clone.API.Dtos
{
    public class BoardForDetailDto
    {
        public string Title { get; set; }
        public int Id { get; set; }
        public bool Favorite { get; set; }
        public int Color { get; set; }
        public Access Access { get; set; }
        public ICollection<ColumnDto> Columns { get; set; }

        public BoardForDetailDto()
        {
            Columns = new Collection<ColumnDto>();
        }
    }
}