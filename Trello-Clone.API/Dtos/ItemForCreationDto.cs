using System.ComponentModel.DataAnnotations;

namespace Trello_Clone.API.Dtos
{
    public class ItemForCreationDto
    {
        [Required]
        public int ColumnId { get; set; }

        [Required]
        [StringLength(255)]
        public string Title { get; set; }

    }
}