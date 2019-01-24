using HomeTestShofiul.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HomeTestShofiul.Data
{
    public class Seed
    {
        private readonly DataContext _context;

        public Seed(DataContext context)
        {
            _context = context;
        }

        public bool IsSeedable()
        {
            var _projectDbContext = _context.Set<Project>();
            if (_projectDbContext.ToList().Count() > 0)
            {
                return false;
            } else
            {
                return true;
            }
        }
        public void SeedData()
        {
            var seedData = System.IO.File.ReadAllText("Data/SeedData.json");
            var data = JsonConvert.DeserializeObject<List<Project>>(seedData);

            foreach(var project in data)
            {
                _context.Projects.Add(project);
            }

            _context.SaveChanges();
        }
    }
}
