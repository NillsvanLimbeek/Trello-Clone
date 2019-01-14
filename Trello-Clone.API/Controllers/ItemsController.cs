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
            var items = await _context.Items.Include(i => i.ColorLabels).ToListAsync();
            var itemsToReturn = _mapper.Map<List<Item>, List<ItemDto>>(items);

            return Ok(itemsToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetItem(int id)
        {
            var item = await _context.Items.FirstOrDefaultAsync(i => i.Id == id);

            return Ok(item);
        }

        [HttpPost]
        public async Task<IActionResult> CreateItem([FromBody] ItemForCreationDto itemForCreationDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var item = _mapper.Map<ItemForCreationDto, Item>(itemForCreationDto);

            _context.Add(item);
            await _context.SaveChangesAsync();

            var itemToReturn = _mapper.Map<Item, ItemDto>(item);
            return Ok(itemToReturn);
        }
    }
}