using System;
using System.ComponentModel.DataAnnotations;

namespace Catalog.Dtos
{
    public record CreateUserDto
    {
        [Required]
        public string Name { get; init; }
        [Required]
        [Range(1, 99)]
        public int Age { get; init; }

        public string Password { get; set; }
    }
}