using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Trello_Clone.API.Data;
using Trello_Clone.API.Dtos;

namespace Trello_Clone.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BoardsController : ControllerBase
    {
        private readonly IBoardsRepository _repo;
        private readonly IMapper _mapper;

        public BoardsController(IBoardsRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetBoards()
        {
            var boards = await _repo.GetBoards();
            var boardsToReturn = _mapper.Map<IEnumerable<BoardsForListDto>>(boards);

            return Ok(boardsToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> getBoard(int id)
        {
            var board = await _repo.GetBoard(id);
            var boardToReturn = _mapper.Map<IEnumerable<BoardsForDetailDto>>(board);

            return Ok(boardToReturn);
        }
    }
}