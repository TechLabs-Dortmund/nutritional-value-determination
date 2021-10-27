using System;

using Catalog.Entities;

namespace Catalog.Dtos
{
    public class UserItemDto
    {
        public Guid UserId { get; set; }

        public Item Item { get; set; }
    }
}
