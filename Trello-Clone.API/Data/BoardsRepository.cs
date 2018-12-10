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

        public async Task<Board> AddBoard(Board board, string title, int color)
        {
            board.Title = title;
            board.Color = color;

            await _context.Boards.AddAsync(board);
            await _context.SaveChangesAsync();

            return board;
        }

        public async Task<Board> DeleteBoard(int id)
        {
            var board = await _context.Boards.FirstOrDefaultAsync(x => x.Id == id);

            _context.Boards.Remove(board);
            await _context.SaveChangesAsync();

            return board;
        }
    }
}