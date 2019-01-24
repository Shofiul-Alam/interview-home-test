using AutoMapper;
using HomeTestShofiul.Dtos;
using HomeTestShofiul.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HomeTestShofiul.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Project, ProjectForViewDto>()
                .ForMember(dest => dest.Contacts, opt =>
                {
                    opt.MapFrom(src => src.Contacts.Select(p => p.Contact));
                });

            CreateMap<ProjectForAddDto, Project>();
            CreateMap<ProjectForUpdateDto, Project>();

            CreateMap<Contact, ContactForViewDto>()
                .ForMember(dest => dest.Projects, opt => {
                    opt.MapFrom(src => src.Projects.Select(p => p.Project));
                });
            CreateMap<Contact, ContactForDetailsDto>();
            CreateMap<ContactForAddDto, Contact>();
            CreateMap<ContactForUpdateDto, Contact>();
        }
    }
}
