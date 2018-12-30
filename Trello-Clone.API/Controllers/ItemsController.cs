using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Trello_Clone.API.Data;

namespace Trello_Clone.API.Controllers
{
    [Route("/api/[controller]")]
    public class ItemsController : Controller
    {
        private readonly TrelloCloneContext _context;
        private readonly IMapper _mapper;

        public ItemsController(TrelloCloneContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetItems()
        {
            var items = await _context.Items.ToListAsync();

            return Ok(items);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetItem(int id)
        {
            var item = await _context.Items.FirstOrDefaultAsync(i => i.Id == id);

            return Ok(item);
        }
    }
}