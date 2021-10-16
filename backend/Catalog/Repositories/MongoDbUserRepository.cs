using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Catalog.Entities;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Catalog.Repositories
{
    public class MongoDbUserRepository : IUserRepository
    {
        private const string databaseName = "catalog";
        private const string collectionName = "users";
        private readonly IMongoCollection<User> usersCollection;
        private readonly FilterDefinitionBuilder<User> filterBuilder = Builders<User>.Filter;


        public MongoDbUserRepository(IMongoClient mongoClient)
        {
            IMongoDatabase database = mongoClient.GetDatabase(databaseName);
            usersCollection = database.GetCollection<User>(collectionName);
        }
        
        public async Task<IEnumerable<User>> GetUsersAsync()
        {
            return await usersCollection.Find(new BsonDocument()).ToListAsync();
        }

        public async Task<User> GetUserAsync(Guid id)
        {
            var filter = filterBuilder.Eq(item => item.Id, id);
            return await usersCollection.Find(filter).SingleOrDefaultAsync();
        }

        public async Task CreateUserAsync(User item)
        {
            await usersCollection.InsertOneAsync(item);
        }

        public async Task UpdateUserAsync(User item)
        {
            var filter = filterBuilder.Eq(existingUser => existingUser.Id, item.Id); 
            await usersCollection.ReplaceOneAsync(filter, item);
        }

        public async Task DeleteUserAsync(Guid id)
        {
            var filter = filterBuilder.Eq(item => item.Id, id);
            await usersCollection.DeleteOneAsync(filter);
        }
    }
}