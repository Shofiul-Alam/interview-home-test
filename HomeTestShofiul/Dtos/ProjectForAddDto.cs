using HomeTestShofiul.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HomeTestShofiul.Dtos
{
    public class ProjectForAddDto
    {
        public string ProjectName { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string ProjectDetails { get; set; }
        public IList<int> ContactList { get; set; }
    }
}
