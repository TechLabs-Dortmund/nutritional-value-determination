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

        [HttpGet("{name}")]
        public async Task<ActionResult> GetUser(string name)
        {
            var user = await this.repository.GetUserAsync(name);
            return Ok(user);
        }

        [HttpPost]
        public async Task<ActionResult> PostUser(CreateUserDto userDto)
        {
            var user = new User()
            {
                Id = Guid.NewGuid(),
                Name = userDto.Name,
                Age = userDto.Age,
                Password = userDto.Password
            };
            await repository.CreateUserAsync(user);
            return Created("", user.AsUserDto());
        }

        [HttpDelete]
        public async Task<ActionResult> DeleteUserAsync(string name)
        {
            var existingUser = await repository.GetUserAsync(name);
            if (existingUser is null)
            {
                return NotFound();
            }

            //await repository.DeleteUserAsync(existingUser.Id);

            return NoContent();
        }
    }
}