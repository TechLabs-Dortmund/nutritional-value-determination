using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Catalog.Dtos;
using Catalog.Entities;
using Catalog.Repositories;
using HtmlAgilityPack;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace Catalog.Controllers
{
    [ApiController]
    [Route("items")]
    public class ItemsController : ControllerBase
    {
        private readonly IItemsRepository repository;

        public ItemsController(IItemsRepository repository)
        {
            this.repository = repository;
        }

        //GET /items
        [HttpGet]
        public async Task<IEnumerable<ItemDto>> GetItemsAsync()
        {
            var items = (await repository.GetItemsAsync())
                .Select(item => item.AsDto());
            return items;
        }

        // GET /items/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<ItemDto>> GetItemAsync(Guid id)
        {
            var item = await repository.GetItemAsync(id);

            if (item is null)
            {
                return NotFound();
            }

            return item.AsDto();
        }

        //POST /items/{itemDto}
        [HttpPost]
        public async Task<ActionResult<ItemDto>> CreateItemAsync(CreateItemDto itemDto)
        {
            Item item = new()
            {
                Id = Guid.NewGuid(),
                FoodName = itemDto.FoodName,
                Kcal = itemDto.Kcal,
                Kj = itemDto.Kj,
                Protein = itemDto.Protein,
                Carbs = itemDto.Carbs,
                Sugars = itemDto.Sugar,
                Fat = itemDto.Fat,
                SatFat = itemDto.SatFat,
                Fibers = itemDto.Fibers,
                CreatedDate = DateTimeOffset.UtcNow
            };

            await repository.CreateItemAsync(item);

            // ReSharper disable once Mvc.ActionNotResolved
            return CreatedAtAction(nameof(GetItemAsync), new {id = item.Id}, item.AsDto());
        }

        //PUT /items/{id}/{itemDto}
        [HttpPut]
        public async Task<ActionResult> UpdateItem(Guid id, UpdateItemDto itemDto)
        {
            var existingItem = await repository.GetItemAsync(id);
            if (existingItem is null)
            {
                return NotFound();
            }

            Item updatedItem = existingItem with
            {
                FoodName = itemDto.FoodName,
                Kcal = itemDto.Kcal,
                Kj = itemDto.Kj,
                Protein = itemDto.Protein,
                Carbs = itemDto.Carbs,
                Sugars = itemDto.Sugar,
                Fat = itemDto.Fat,
                SatFat = itemDto.SatFat,
                Fibers = itemDto.Fibers,
            };
            
            await repository.UpdateItemAsync(updatedItem);

            return NoContent();
        }

        //DELETE /items/{id}
        [HttpDelete]
        public async Task<ActionResult> DeleteItemAsync(Guid id)
        {
            var existingItem = repository.GetItemAsync(id);
            if (existingItem is null)
            {
                return NotFound();
            }
            
            await repository.DeleteItemAsync(id);

            HtmlAgilityPack.HtmlWeb website = new HtmlAgilityPack.HtmlWeb();

            return NoContent();
        }
        
    }
    
    
    [ApiController]
    [Route("scrape")]
    public class WebScrapingController : ControllerBase
    {
        [HttpPost]
        public void ScrapeSite()
        {
            var html = @"http://www.foodnutritiontable.com/nutritions/B";

            HtmlWeb web = new HtmlWeb();

            var htmlDoc = web.Load(html);

            var node = htmlDoc.DocumentNode.SelectSingleNode("//body/form/" +
                                                             "div[@id='outercontainer']/" +
                                                             "div[@id='container']/" +
                                                             "div[@id='body']/" +
                                                             "div[@id='cphMain_pnlVwtContainer']/" +
                                                             "div[@id='cphMain_ltvNutrition_pnlRowContainer_4']");

            Console.WriteLine("Node Name: " + node.Name + "\n" + node.InnerText);
        }
    }
    
    
}