using AutoMapper;
using HomeTestShofiul.Controllers;
using HomeTestShofiul.Data;
using HomeTestShofiul.Dtos;
using HomeTestShofiul.Helpers;
using HomeTestShofiul.Models;
using Microsoft.AspNetCore.Mvc;
using NUnit.Framework;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace UnitTest
{
    [TestFixture]
    public class ContactTest
    {
        private ContactForAddDto _contactForAddDto;
        private ContactForUpdateDto _contactForUpdateDto;
        private IDataService<Contact> _contactService;
        private IMapper _mapper;

        public ContactTest()
        {
            _contactService = new DataService<Contact>();
            var mockMapper = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new AutoMapperProfiles());
            });
            _mapper = mockMapper.CreateMapper();



            _contactForAddDto = new ContactForAddDto
            {
                Name = "Test Contact",
                Address = "1 See Stree MedowBank College",
                Details = "This is the testing details for ContactDto"
            };
            _contactForUpdateDto = new ContactForUpdateDto
            {
                Name = "Updating The Contact for testing",
                Address = "Updated Address 1 See Stree MedowBank College",
                Details = "This is the testing checking for updating the details",
 
            };
        }

        [SetUp]
        public void Setup()
        {


        }

        [Test]
        public void GetContact()
        {
            var contactsController = new ContactsController(_contactService, _mapper);
            var result = contactsController.GetContact(5).Result;

            var okResult = result as OkObjectResult;

            Assert.That(okResult.StatusCode, Is.EqualTo(200));
        }

        [Test]
        public void AddContact()
        {
            var contactsController = new ContactsController(_contactService, _mapper);
            Task<IActionResult> result = contactsController.Add(_contactForAddDto);

            Assert.That(result.IsCompleted, Is.True);
        }

        [Test]
        public void UpdateContact()
        {
            var contactsController = new ContactsController(_contactService, _mapper);
            var result = contactsController.UpdateContact(8, _contactForUpdateDto).Result;
            var okResult = result as OkObjectResult;

            Assert.That(okResult.StatusCode, Is.EqualTo(200));
        }

       

        [Test]
        public void DeleteContact()
        {
            var contactsController = new ContactsController(_contactService, _mapper);
            var result = contactsController.Delete(2);

            var okResult = result as OkObjectResult;

            Assert.That(okResult.StatusCode, Is.EqualTo(200));
        }
    }
}