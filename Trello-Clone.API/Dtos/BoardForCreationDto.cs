using System.ComponentModel.DataAnnotations;

namespace Trello_Clone.API.Dtos
{
    public class BoardForCreationDto
    {
        [Required]
        [StringLength(255)]
        public string Title { get; set; }

        [Required]
        public int Color { get; set; }
    }
}