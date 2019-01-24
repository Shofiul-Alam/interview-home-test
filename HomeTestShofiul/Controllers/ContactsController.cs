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
    public class ContactsController : ControllerBase
    {
        private IDataService<Contact> _contactService;
        private readonly IMapper _mapper;


        public ContactsController(IDataService<Contact> contactService, IMapper mapper)
        {
            _contactService = contactService;
            _mapper = mapper;

        }

        [HttpGet]
        public IActionResult List()
        {
            var contacts = _contactService.GetAllWithIncludes("Projects.Project");

            var contactList = _mapper.Map<ICollection<ContactForViewDto>>(contacts);
            contactList = contactList.OrderByDescending(c => c.Id).ToList();

            return Ok(contactList);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetContact(int id)
        {
            var contact = await _contactService.GetContact(id);
                
            var contactView = _mapper.Map<ContactForViewDto>(contact);

            return Ok(contactView);
        }

        [HttpPost("add")]
        public async Task<IActionResult> Add(ContactForAddDto contactForAddDto)
        {
            Contact contact = _mapper.Map<Contact>(contactForAddDto);

            var contactData = await _contactService.Add(contact);

            var contactView = _mapper.Map<ContactForViewDto>(contactData);

            return Ok(contactView);
        }

        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateContact(int id, ContactForUpdateDto contactForUpdateDto)
        {
            Contact contact = await _contactService.GetContact(id);

            _mapper.Map(contactForUpdateDto, contact);

            
            if (await _contactService.Update(contact))
            {
                var contactView = _mapper.Map<ContactForViewDto>(contact);
                return Ok(contactView);
            }

            throw new Exception($"Updating project {id} failed on save");


        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Contact contact = _contactService.FindById(id);
            _contactService.Delete(contact);
            return Ok("Contact Deleted Successfully");
        }
    }
}