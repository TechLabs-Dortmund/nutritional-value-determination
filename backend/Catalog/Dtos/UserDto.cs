using System;

namespace Catalog.Dtos
{
    public record UserDto
    {
        public Guid Id { get; init; }
        public string Name { get; init; }
        public int Age { get; init; }
    }
}