using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Trello_Clone.API.Data;

namespace Trello_Clone.API.Controllers
{
    [Route("/api/[controller]")]
    public class ColumnsController : Controller
    {
        private readonly TrelloCloneContext _context;
        private readonly IMapper _mapper;
        public ColumnsController(TrelloCloneContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetColumns()
        {
            var columns = await _context.Columns.ToListAsync();

            return Ok(columns);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetColumn(int id)
        {
            var column = await _context.Columns.FirstOrDefaultAsync(c => c.Id == id);

            return Ok(column);
        }
    }
}