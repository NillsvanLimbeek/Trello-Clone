using AutoMapper;
using Trello_Clone.API.Dtos;
using Trello_Clone.API.Models;

namespace Trello_Clone.API.Mapping
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Board, BoardForListDto>();
            CreateMap<Board, BoardForDetailDto>();
        }
    }
}