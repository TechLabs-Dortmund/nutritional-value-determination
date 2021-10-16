using System.ComponentModel.DataAnnotations;

namespace Catalog.Dtos
{
    public record UpdateUserDto()
    {
        [Required]
        public string Name { get; init; }
        [Required]
        [Range(1, 99)]
        public int Age { get; init; }
    }
}