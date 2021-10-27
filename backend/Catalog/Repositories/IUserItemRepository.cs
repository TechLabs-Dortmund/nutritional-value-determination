using System;
using System.Collections.Generic;
using System.Threading.Tasks;

using Catalog.Entities;

namespace Catalog.Repositories
{
    public interface IUserItemRepository
    {
        Task<IEnumerable<UserItem>> GetUserItemsAsync(Guid userId);
        Task CreateUserItemAsync(UserItem item);
    }
}
