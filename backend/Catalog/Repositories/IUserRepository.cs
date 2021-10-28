using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Catalog.Entities;

namespace Catalog.Repositories
{
    public interface IUserRepository
    {
        Task<IEnumerable<User>> GetUsersAsync();
        Task<User> GetUserAsync(string name);
        Task CreateUserAsync(User item);
        Task UpdateUserAsync(User item);
        Task DeleteUserAsync(Guid id);
    }
}