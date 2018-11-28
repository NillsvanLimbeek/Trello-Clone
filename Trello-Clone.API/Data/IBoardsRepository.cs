using System.Collections.Generic;
using System.Threading.Tasks;
using Trello_Clone.API.Models;

namespace Trello_Clone.API.Data
{
    public interface IBoardsRepository
    {
        Task<IEnumerable<Board>> GetBoards();
        Task<Board> GetBoard(int id);
    }
}