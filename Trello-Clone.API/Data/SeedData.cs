using System.Collections.Generic;
using Newtonsoft.Json;
using Trello_Clone.API.Models;

namespace Trello_Clone.API.Data
{
    public class SeedData
    {
        private readonly DataContext _context;
        public SeedData(DataContext context)
        {
            _context = context;

        }

        public void SeedBoards()
        {
            var boardsData = System.IO.File.ReadAllText("Data/BoardsData.json");
            var boards = JsonConvert.DeserializeObject<List<Board>>(boardsData);

            foreach (var board in boards)
            {
                _context.Boards.Add(board);
            }

            _context.SaveChanges();
        }
    }
}