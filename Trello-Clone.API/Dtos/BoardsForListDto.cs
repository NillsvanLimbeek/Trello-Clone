using System;

namespace Trello_Clone.API.Dtos
{
    public class BoardsForListDto
    {
        public string Title { get; set; }
        public int Id { get; set; }
        public bool Favorite { get; set; }
        public int Color { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}