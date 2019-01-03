using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Trello_Clone.API.Dtos
{
    public class ItemDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int ColumnId { get; set; }
        public ICollection<int> ColorLabels { get; set; }

        public ItemDto()
        {
            ColorLabels = new Collection<int>();
        }
    }
}