using HomeTestShofiul.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HomeTestShofiul.Data
{
    public class DataService<T> : IDataService<T> where T : class
    {
        //fields
        private DataContext _context;
        private DbSet<T> _dbSet;

        //constructor
        public DataService()
        {
            _context = new DataContext();
            _dbSet = _context.Set<T>();
        }


        public async Task<T> Add(T entity)
        {
            await _dbSet.AddAsync(entity);
            _context.SaveChanges();

            return entity;
        }

      

        public void Create(T entity)
        {
            _dbSet.Add(entity);
            _context.SaveChanges(); // commit in TSQL
        }

        public void Delete(T entity)
        {
            _dbSet.Remove(entity);
            _context.SaveChanges();
        }

        public T FindById(int id)
        {
            return _dbSet.Find(id);
        }


        public IEnumerable<T> GetAll()
        {
            return _dbSet.ToList();
        }

        public IEnumerable<T> GetAllWithIncludes(string child)
        {
            return _dbSet.Include(child).ToList();
        }


        public T GetSingle(Func<T, bool> predicate)
        {
            return _context.Set<T>().FirstOrDefault(predicate);
        }

        public IEnumerable<T> Query(Func<T, bool> predicate)
        {
            return _context.Set<T>().Where(predicate);
        }

        public async Task<bool> Update(T entity)
        {
            _dbSet.Update(entity);
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<Project> GetProject(int id)
        {
            return await _context.Projects.Include("Contacts.Contact").FirstOrDefaultAsync(t => t.Id == id);
        }
        public async Task<Contact> GetContact(int id)
        {
            return await _context.Contacts.Include("Projects.Project").FirstOrDefaultAsync(t => t.Id == id);
        }

        public Project AddProjectContact(int projectId, int contactId)
        {
            Project project = _context.Projects.Where(c => c.Id == projectId)
                                            .Include(c => c.Contacts).FirstOrDefault();
            Contact contact = _context.Contacts.Where(s => s.Id == contactId).FirstOrDefault();

            project.Contacts.Add(new ProjectContact { Contact = contact });

            _context.SaveChanges();

            return project;
        }
    }
}
