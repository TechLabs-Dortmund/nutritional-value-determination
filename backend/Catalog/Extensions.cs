using Catalog.Dtos;
using Catalog.Entities;

namespace Catalog
{
    public static class Extensions
    {
        public static ItemDto AsDto(this Item item)
        {
            return new ItemDto()
            {
                Id = item.Id,
                FoodName = item.FoodName,
                Kcal = item.Kcal,
                Kj = item.Kj,
                Protein = item.Protein,
                Carbs = item.Carbs,
                Sugars = item.Sugars,
                Fat = item.Fat,
                SatFat = item.SatFat,
                Fibers = item.Fibers,
                CreatedDate = item.CreatedDate
            };
        }
        
        public static UserDto AsUserDto(this User item)
        {
            return new UserDto()
            {
                Id = item.Id,
                Name = item.Name,
                Age = item.Age
            };
        }
    }
}