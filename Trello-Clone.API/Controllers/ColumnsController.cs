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
            var columns = await _context.Columns.Include(c => c.Items).ToListAsync();
            var columnsToReturn = _mapper.Map<List<Column>, List<ColumnDto>>(columns);

            return Ok(columnsToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetColumn(int id)
        {
            var column = await _context.Columns.FirstOrDefaultAsync(c => c.Id == id);

            return Ok(column);
        }
    }
}