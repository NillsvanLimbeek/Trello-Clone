namespace Trello_Clone.API.Models
{
    public class ColorLabel
    {
        public int Id { get; set; }
        public Item Item { get; set; }
        public int ItemId { get; set; }
        public int Color { get; set; }
    }
}