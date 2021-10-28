using System.Collections.Generic;
using System.Threading.Tasks;

using Catalog.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Catalog.Entities;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Catalog.Repositories
{
    public class MongoDbUserItemRepository: IUserItemRepository
    {
        private const string databaseName = "catalog";
        private const string collectionName = "userItems";
        private readonly IMongoCollection<UserItem> userItemCollection;
        private readonly FilterDefinitionBuilder<UserItem> filterBuilder = Builders<UserItem>.Filter;

        public MongoDbUserItemRepository(IMongoClient mongoClient)
        {
            IMongoDatabase database = mongoClient.GetDatabase(databaseName);
            userItemCollection = database.GetCollection<UserItem>(collectionName);
        }

        public async Task<IEnumerable<UserItem>> GetUserItemsAsync(Guid userId)
        {
            var filter = filterBuilder.Eq(item => item.UserId, userId);
            Console.WriteLine(await userItemCollection.Find(filter).ToListAsync());
            return await userItemCollection.Find(filter).ToListAsync();
        }

        public async Task CreateUserItemAsync(UserItem item)
        {
            await userItemCollection.InsertOneAsync(item);        }
        }
}
