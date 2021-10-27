using System;
using System.Threading.Tasks;

using Catalog.Dtos;
using Catalog.Entities;
using Catalog.Repositories;

using Microsoft.AspNetCore.Mvc;

namespace Catalog.Controllers
{
    [ApiController]
    [Route("useritem")]
    public class UserItemController: ControllerBase
    {
        private readonly IUserItemRepository repository;

        public UserItemController(IUserItemRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet("{id:Guid}")]
        public async Task<ActionResult> GetUser(Guid id)
        {
            var users = await this.repository.GetUserItemsAsync(id);
            return Ok(users);
        }

        [HttpPost]
        public async Task<ActionResult> PostUser(UserItemDto userDto)
        {
            var userItem = new UserItem()
            {
                UserId = userDto.UserId,
                Item = userDto.Item
            };
            await repository.CreateUserItemAsync(userItem);
            return Created("", userItem);
        }
    }
}
