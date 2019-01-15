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
            var column = await _context.Columns.Include(c => c.Items).FirstOrDefaultAsync(c => c.Id == id);

            if (column == null) {
                return NotFound();
            }

            var columnToReturn = _mapper.Map<Column, ColumnDto>(column);

            return Ok(columnToReturn);
        }

        [HttpPost]
        public async Task<IActionResult> CreateColumn([FromBody] ColumnForCreationDto columnForCreationDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var column = _mapper.Map<ColumnForCreationDto, Column>(columnForCreationDto);

            _context.Add(column);
            await _context.SaveChangesAsync();

            var columntoReturn = _mapper.Map<Column, ColumnDto>(column);
            return Ok(column);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateColumn(int id, [FromBody] ColumnDto columnDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var column = await _context.Columns.Include(c => c.Items).FirstOrDefaultAsync(c => c.Id == id);

            if (column == null)
            {
                return NotFound();
            }

            _mapper.Map<ColumnDto, Column>(columnDto, column);
            await _context.SaveChangesAsync();

            var columnToReturn = _mapper.Map<Column, ColumnDto>(column);
            return Ok(columnToReturn);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteColumn(int id)
        {
            var column = await _context.Columns.FindAsync(id);

            if (column == null)
            {
                return NotFound();
            }

            _context.Remove(column);
            await _context.SaveChangesAsync();

            return Ok(id);
        }
    }
}