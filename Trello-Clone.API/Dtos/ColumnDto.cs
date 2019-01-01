using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Trello_Clone.API.Dtos
{
    public class ColumnDto
    {
        public int Id { get; set; }
        public int BoardId { get; set; }
        public string Title { get; set; }
        public ICollection<int> Items { get; set; }

        public ColumnDto()
        {
            Items = new Collection<int>();
        }
    }
}