using System;

namespace Catalog.Entities
{
    public record Item
    {
        public Guid Id { get; init; }
        public string FoodName { get; init; }
        public decimal? Kcal { get; init; }
        public decimal? Kj { get; init; }
        public decimal? Protein { get; init; }
        public decimal? Carbs { get; init; }
        public decimal? Sugars { get; init; }
        public decimal? Fat { get; init; }
        public decimal? SatFat { get; init; }
        public decimal? Fibers { get; init; }
        public DateTimeOffset CreatedDate { get; init; }
    }
}