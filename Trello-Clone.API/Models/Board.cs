using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace Trello_Clone.API.Models
{
    public class Board
    {
        [Required]
        [StringLength(255)]
        public string Title { get; set; }
        public int Id { get; set; }
        public bool Favorite { get; set; }
        public bool Personal { get; set; }

        [Required]
        public int Color { get; set; }
        public ICollection<Column> Columns { get; set; }

        public Board()
        {
            Columns = new Collection<Column>();
        }
    }
}