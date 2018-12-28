using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Trello_Clone.API.Models
{
    [Table("Columns")]
    public class Column
    {
        [Required]
        [StringLength(255)]
        public string Title { get; set; }
        public int Id { get; set; }
        public string State { get; set; }
        public Board Board { get; set; }
        public int BoardId { get; set; }
    }
}