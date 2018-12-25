using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Trello_Clone.API.Data;
using Trello_Clone.API.Dtos;
using Trello_Clone.API.Models;

namespace Trello_Clone.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BoardsController : Controller
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

        [HttpPost]
        public async Task<IActionResult> addBoard(BoardForCreationDto boardForCreationDto)
        {
            var boardToCreate = new Board
            {
                Title = boardForCreationDto.Title,
                Color = boardForCreationDto.Color,
            };

            var createdBoard = await _repo.AddBoard(boardToCreate, boardForCreationDto.Title, boardForCreationDto.Color);

            return Ok(createdBoard);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> removeBoard(int id)
        {
            var board = await _repo.DeleteBoard(id);

            return Ok(board);
        }
    }
}