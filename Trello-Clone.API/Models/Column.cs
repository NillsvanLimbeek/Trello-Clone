using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Trello_Clone.API.Models
{
    [Table("Columns")]
    public class Column
    {
        public string Title { get; set; }
        public int Id { get; set; }
        public string State { get; set; }
        public Board Board { get; set; }
        public int BoardId { get; set; }
        public ICollection<Item> Items { get; set; }
        public Column()
        {
            Items = new Collection<Item>();
        }
    }
}