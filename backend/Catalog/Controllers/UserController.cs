using System;
using System.Threading.Tasks;
using Catalog.Dtos;
using Catalog.Entities;
using Catalog.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Catalog.Controllers
{
    [ApiController]
    [Route("userdata")]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository repository;

        public UserController(IUserRepository repository)
        {
            this.repository = repository;
        }
        
        [HttpGet]
        public async Task<ActionResult> GetAllUsers()
        {
            var users = await this.repository.GetUsersAsync();
            return Ok(users);
        }

        [HttpGet("{id:guid}")]
        public async Task<ActionResult> GetUser(Guid id)
        {
            var user = await this.repository.GetUserAsync(id);
            return Ok(user);
        }
        
        [HttpPost]
        public async Task<ActionResult> PostUser(CreateUserDto userDto)
        {
            var user = new User()
            {
                Id = Guid.NewGuid(),
                Name = userDto.Name,
                Age = userDto.Age
            };
            await repository.CreateUserAsync(user);
            return Created("", user.AsUserDto());
        }
        
        [HttpPut]
        public async Task<ActionResult> UpdateUser(Guid id, UpdateUserDto userDto)
        {
            var existingUser = await repository.GetUserAsync(id);
            if (existingUser is null)
            {
                return NotFound();
            }

            var updatedUser = existingUser with
            {
                Name = userDto.Name,
                Age = userDto.Age
            };
            
            await repository.UpdateUserAsync(updatedUser);

            return NoContent();
        }

        [HttpDelete]
        public async Task<ActionResult> DeleteUserAsync(Guid id)
        {
            var existingUser = repository.GetUserAsync(id);
            if (existingUser is null)
            {
                return NotFound();
            }
            
            await repository.DeleteUserAsync(id);
            
            return NoContent();
        }
    }
}