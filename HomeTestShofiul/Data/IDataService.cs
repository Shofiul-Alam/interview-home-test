using HomeTestShofiul.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HomeTestShofiul.Data
{
    public interface IDataService<T> 
    {
        Task<T> Add(T entity);
        IEnumerable<T> GetAll();
        IEnumerable<T> GetAllWithIncludes(string child);
        void Create(T entity);
        T FindById(int id);
        T GetSingle(Func<T, bool> predicate);
        IEnumerable<T> Query(Func<T, bool> predicate);
        Task<bool> Update(T entity);
        void Delete(T entity);
        Task<Project> GetProject(int id);
        Task<Contact> GetContact(int id);

        Project AddProjectContact(int projectId, int contactId);
    }
}
