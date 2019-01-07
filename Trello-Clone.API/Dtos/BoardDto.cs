using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace Trello_Clone.API.Dtos
{
    public class BoardDto
    {
        [Required]
        [StringLength(255)]
        public string Title { get; set; }
        public bool Favorite { get; set; }
        public bool Personal { get; set; }
        public int Id { get; set; }

        [Required]
        public int Color { get; set; }
        public ICollection<int> Columns { get; set; }

        public BoardDto()
        {
            Columns = new Collection<int>();
        }
    }
}