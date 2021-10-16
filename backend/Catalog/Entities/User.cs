using System;

namespace Catalog.Entities
{
    public record User
    {
        public Guid Id { get; init; }
        public string Name { get; init; }
        public int Age { get; init; }
    }
}