using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Trello_Clone.API.Models;

namespace Trello_Clone.API.Data
{
    public class BoardsRepository : IBoardsRepository
    {
        private readonly DataContext _context;
        public BoardsRepository(DataContext context)
        {
            _context = context;

        }
        public async Task<Board> GetBoard(int id)
        {
            var board = await _context.Boards.FirstOrDefaultAsync(x => x.Id == id);
            return board;
        }

        public async Task<IEnumerable<Board>> GetBoards()
        {
            var boards = await _context.Boards.ToListAsync();
            return boards;
        }
    }
}