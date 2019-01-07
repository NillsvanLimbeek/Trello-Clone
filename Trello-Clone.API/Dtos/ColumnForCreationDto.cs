using System.ComponentModel.DataAnnotations;

namespace Trello_Clone.API.Dtos
{
    public class ColumnForCreationDto
    {
        [Required]
        public int BoardId { get; set; }

        [Required]
        [StringLength(255)]
        public string Title { get; set; }
    }
}