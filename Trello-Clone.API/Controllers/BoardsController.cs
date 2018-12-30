using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Trello_Clone.API.Data;
using Trello_Clone.API.Dtos;
using Trello_Clone.API.Models;

namespace Trello_Clone.API.Controllers
{
    [Route("api/[controller]")]
    public class BoardsController : Controller
    {
        private readonly TrelloCloneContext _context;
        private readonly IMapper _mapper;

        public BoardsController(TrelloCloneContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetBoards()
        {
            var boards = await _context.Boards.Include(b => b.Columns).ToListAsync();
            var boardsToReturn = _mapper.Map<List<Board>, List<BoardDto>>(boards);

            return Ok(boardsToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBoard(int id)
        {
            var board = await _context.Boards.Include(b => b.Columns).FirstOrDefaultAsync(b => b.Id == id);
            var boardToReturn = _mapper.Map<Board, BoardDto>(board);

            return Ok(boardToReturn);
        }

        // [HttpPost]
        // public async Task<IActionResult> addBoard(BoardForCreationDto boardForCreationDto)
        // {
        //     var boardToCreate = new Board
        //     {
        //         Title = boardForCreationDto.Title,
        //         Color = boardForCreationDto.Color,
        //     };

        //     var createdBoard = await _repo.AddBoard(boardToCreate, boardForCreationDto.Title, boardForCreationDto.Color);

        //     return Ok(createdBoard);
        // }

        // [HttpDelete("{id}")]
        // public async Task<IActionResult> removeBoard(int id)
        // {
        //     var board = await _repo.DeleteBoard(id);

        //     return Ok(board);
        // }
    }
}