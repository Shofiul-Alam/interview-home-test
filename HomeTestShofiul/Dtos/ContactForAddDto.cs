using HomeTestShofiul.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HomeTestShofiul.Dtos
{
    public class ContactForAddDto
    {
        public string Name { get; set; }
        public string Details { get; set; }
        public string Address { get; set; }
        //public ICollection<Project> ProjectList { get; set; }
    }
}
