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
            // domain to API
            CreateMap<Board, BoardDto>()
                .ForMember(dto => dto.Columns, opt => opt.MapFrom(b => b.Columns.Select(c => c.Id)));
            CreateMap<Column, ColumnDto>()
                .ForMember(dto => dto.Items, opt => opt.MapFrom(c => c.Items.Select(i => i.Id)));
            CreateMap<Item, ItemDto>()
                .ForMember(dto => dto.ColorLabels, opt => opt.MapFrom(i => i.ColorLabels.Select(cl => cl.Id)));

            // API to domain
            CreateMap<BoardDto, Board>()
                .ForMember(b => b.Id, opt => opt.Ignore());
            CreateMap<BoardForCreationDto, Board>();

            CreateMap<ColumnDto, Column>()
                .ForMember(c => c.Id, opt => opt.Ignore());
            CreateMap<ColumnForCreationDto, Column>();

            CreateMap<ItemForCreationDto, Item>();
            CreateMap<Item, ItemDto>();
        }
    }
}