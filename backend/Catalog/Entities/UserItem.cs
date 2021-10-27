using System;
using System.Collections.Generic;

namespace Catalog.Entities
{
    public class UserItem
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }

        public Item Item { get; set; }
    }
}
