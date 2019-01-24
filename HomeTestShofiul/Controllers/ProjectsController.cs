using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using HomeTestShofiul.Data;
using HomeTestShofiul.Dtos;
using HomeTestShofiul.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HomeTestShofiul.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {

        private IDataService<Project> _projectService;
        private readonly IMapper _mapper;


        public ProjectsController(IDataService<Project> projectService, IMapper mapper)
        {
            _projectService = projectService;
            _mapper = mapper;

        }

        [HttpGet]
        public IActionResult List()
        {
            var projects =  _projectService.GetAllWithIncludes("Contacts.Contact");
                projects = projects.OrderByDescending(c => c.Id).ToList();

            var projectList = _mapper.Map<ICollection<ProjectForViewDto>>(projects);



            return Ok(projectList);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProject(int id)
        {
            var project = await _projectService.GetProject(id);

            var projectView = _mapper.Map<ProjectForViewDto>(project);

            return Ok(projectView);
        }

        [HttpPost("add")]
        public async Task<IActionResult> Add(ProjectForAddDto projectForAddDto)
        {
            Project project = _mapper.Map<Project>(projectForAddDto);
            var projectDb = await _projectService.Add(project);

            if (projectForAddDto.ContactList.Count() > 0)
            {
                foreach (int contactId in projectForAddDto.ContactList)
                {

                    _projectService.AddProjectContact(projectDb.Id, contactId);
                }
            }
            

           

            var projectView = _mapper.Map<ProjectForViewDto>(projectDb);

            return Ok(projectView);
        }

        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateProject(int id, ProjectForUpdateDto projectForUpdateDto)
        {
            Project project = await _projectService.GetProject(id);

            _mapper.Map(projectForUpdateDto, project);

            if (projectForUpdateDto.ContactList.Count() > 0)
            {
                List<ProjectContact> Contacts = new List<ProjectContact>();
                foreach (int contactId in projectForUpdateDto.ContactList)
                {
                    ProjectContact pc = new ProjectContact { ContactId = contactId };
                    Contacts.Add(pc);

                }
                project.Contacts = Contacts;
            }

            if (await _projectService.Update(project))
            {
                var projectView = _mapper.Map<ProjectForViewDto>(project);
                return Ok(projectView);
            }

            throw new Exception($"Updating project {id} failed on save");


        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Project project = _projectService.FindById(id);
            _projectService.Delete(project);
            return Ok("Project Successfully deleted");
        }

        [HttpPost("{id}/add-contact")]
        public async Task<IActionResult> AddContact(int id, ContactForAddDto contactForAddDto)
        {
            Contact contact = _mapper.Map<Contact>(contactForAddDto);
            Project project = await _projectService.GetProject(id);

            if(project.Contacts.Count() > 0 )
            {
                project.Contacts.Add(new ProjectContact { Contact = contact });
            } else
            {
                project.Contacts = new List<ProjectContact> { new ProjectContact { Contact = contact } };
            }
           

            //project.Contacts.Add(contact);

            if (await _projectService.Update(project))
            {
                return RedirectToAction("List", "Projects");
            }

            throw new Exception($"Updating project {id} failed on save");

        }

    }
}