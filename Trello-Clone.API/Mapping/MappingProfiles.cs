using System.Linq;
using AutoMapper;
using Trello_Clone.API.Dtos;
using Trello_Clone.API.Models;

namespace Trello_Clone.API.Mapping
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Board, BoardDto>()
                .ForMember(dto => dto.Columns, opt => opt.MapFrom(b => b.Columns.Select(c => c.Id)));
            CreateMap<Column, ColumnDto>()
                .ForMember(dto => dto.Items, opt => opt.MapFrom(c => c.Items.Select(i => i.Id)));
            CreateMap<Item, ItemDto>()
                .ForMember(dto => dto.ColorLabels, opt => opt.MapFrom(i => i.ColorLabels.Select(cl => cl.Id)));
        }
    }
}