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
    public class ProjectTest
    {
        private ProjectForAddDto _project;
        private ProjectForUpdateDto _projectUpdateObj;
        private IDataService<Project> _projectService;
        private IMapper _mapper;

        public ProjectTest()
        {
            _projectService = new DataService<Project>();
            var mockMapper = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new AutoMapperProfiles());
            });
            _mapper = mockMapper.CreateMapper();
            


            _project = new ProjectForAddDto
            {
                ProjectName = "Test Project",
                Address = "1 See Stree MedowBank College",
                Phone = "029988889",
                ProjectDetails = "This is a Unit Test project Object"
            };
            _projectUpdateObj = new ProjectForUpdateDto
            {
                ProjectName = "Test Project updated Last",
                Address = "1 See Stree MedowBank College",
                Phone = "029988889",
                ProjectDetails = "This is a Unit Test project Object",
                ContactList = new List<int>(){ 2, 3 }
            };
        }

        [SetUp]
        public void Setup()
        {

           
        }

        [Test]
        public void AddProject()
        {
            var projectController = new ProjectsController(_projectService, _mapper);
            Task<IActionResult> result = projectController.Add(_project);

            Assert.That(result.IsCompleted, Is.True);
        }

        [Test]
        public void UpdateProject()
        {
            var projectController = new ProjectsController(_projectService, _mapper);
            var result = projectController.UpdateProject(4, _projectUpdateObj).Result;
            var okResult = result as OkObjectResult;

            Assert.That(okResult.StatusCode, Is.EqualTo(200));
        }

        [Test]
        public void GetProject()
        {
            var projectController = new ProjectsController(_projectService, _mapper);
            var result = projectController.GetProject(5).Result;

            var okResult = result as OkObjectResult;

            Assert.That(okResult.StatusCode, Is.EqualTo(200));
        }

        [Test]
        public void DeleteProject()
        {
            var projectController = new ProjectsController(_projectService, _mapper);
            var result = projectController.Delete(3);

            var okResult = result as OkObjectResult;

            Assert.That(okResult.StatusCode, Is.EqualTo(200));
        }
    }
}