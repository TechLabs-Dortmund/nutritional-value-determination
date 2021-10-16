using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Catalog.Entities;

namespace Catalog.Repositories
{
    public interface IUserRepository
    {
        Task<IEnumerable<User>> GetUsersAsync();
        Task<User> GetUserAsync(Guid id);
        Task CreateUserAsync(User item);
        Task UpdateUserAsync(User item);
        Task DeleteUserAsync(Guid id);
    }
}