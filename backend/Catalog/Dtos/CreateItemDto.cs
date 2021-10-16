using System.ComponentModel.DataAnnotations;

namespace Catalog.Dtos
{
    public record CreateItemDto
    {
        [Required]
        public string FoodName { get; init; }
        [Required]
        [Range(0, 100000)]
        public decimal Kcal { get; init; }
        [Required]
        [Range(0, 100000)]
        public decimal Kj { get; init; }
        [Required]
        [Range(0, 100000)]
        public decimal Protein { get; init; }
        [Required]
        [Range(0, 100000)]
        public decimal Carbs { get; init; }
        [Required]
        [Range(0, 100000)]
        public decimal Sugar { get; init; }
        [Required]
        [Range(0, 100000)]
        public decimal Fat { get; init; }
        [Required]
        [Range(0, 100000)]
        public decimal SatFat { get; init; }
        [Required]
        [Range(0, 100000)]
        public decimal Fibers { get; init; }
    }
}