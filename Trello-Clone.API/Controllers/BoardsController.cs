using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Trello_Clone.API.Data;

namespace Trello_Clone.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BoardsController : ControllerBase
    {
        private readonly IBoardsRepository _repo;
        public BoardsController(IBoardsRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetBoards()
        {
            var boards = await _repo.GetBoards();
            return Ok(boards);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> getBoard(int id)
        {
            var board = await _repo.GetBoard(id);
            return Ok(board);
        }
    }
}