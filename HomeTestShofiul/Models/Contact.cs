using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HomeTestShofiul.Models
{
    public class Contact
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public string Details { get; set; }
        public string Address { get; set; }
        public virtual ICollection<ProjectContact> Projects { get; set; }

    }
}
