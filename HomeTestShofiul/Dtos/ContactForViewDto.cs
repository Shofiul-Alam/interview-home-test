using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HomeTestShofiul.Dtos
{
    public class ContactForViewDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Details { get; set; }
        public string Address { get; set; }
        public IEnumerable<ProjectForDetailsDto> Projects { get; set; }
    }
}
