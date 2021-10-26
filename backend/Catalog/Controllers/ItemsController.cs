﻿using System;
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
        [HttpGet("{name}")]
        public async Task<ActionResult<ItemDto>> GetItemAsync(string name)
        {
            Dictionary<string, string> nameDict = new Dictionary<string, string>()
            {
                {"baguette", "BREAD,WHEAT"},
                {"brot", "BREAD,WHEAT"},
                {"normale brötchen", "BREAD,ITALIAN"},
                {"körner brötchen", "BREAD,ITALIAN"},
                {"toastbrot", "BREAD,RYE,TOASTED"},
                {"Hafer", "OATS"},
                {"Mais", "CORN,WHITE"},
                {"Apple", "APPLES,RAW,WITH SKIN"},
                {"Apricot", "APRICOTS,RAW"},
                {"Banana", "BANANAS,RAW"},
                {"Blueberries", "BLUEBERRIES,RAW"},
                {"Cherry", "CHERRIES,SOUR,RED,RAW"},
                {"Peach", "PEACHES,RAW"},
                {"Pear", "PEARS,RAW"},
                {"Raspberry", "RASPBERRIES,RAW"},
                {"Strawberry", "STRAWBERRIES,RAW"},
                {"Watermelon", "WATERMELON,RAW"},
                {"bacon", "PORK,CURED,BACON,RAW"},
                {"steak", "BEEF,GRASS-FED,STRIP STEAKS,LN,RAW"},
                {"Chicken", "CHICKEN BREAST TENDERS,UNCKD"},
                {"Ham", "USDA COMMODITY,TURKEY HAM,DK MEAT,SMOKED,FRZ"},
                {"Sausages", "SAUSAGE,VIENNA,CND,CHICK,BF,PORK"},
                {"Almond", "ALMONDS,BLANCHED"},
                {"Cashew", "NUTS,CASHEW NUTS,RAW"},
                {"chiaseed", "CHIA SEEDS,DRIED"},
                {"Hazelnut", "HAZELNUTS OR FILBERTS"},
                {"lenses", "LENTILS,RAW"},
                {"linseed", "CHIA SEEDS,DRIED"},
                {"Macadamia", "MACADAMIA NUTS,RAW"},
                {"Peanut", "PEANUTS,ALL TYPES,RAW"},
                {"Pecan", "PECANS"},
                {"Pumpkinseed", "SUNFISH,PUMPKIN SEED,RAW"},
                {"Rice", "WILD RICE,RAW"},
                {"Sesame", "SESAME SEEDS,WHOLE,DRIED"},
                {"sunflower seeds", "SUNFLOWER SD KRNLS,DRIED"},
                {"Walnut", "WALNUTS,ENGLISH"},
                {"Herring", "HERRING,ATLANTIC,RAW"},
                {"Salmon", "SALMON,ATLANTIC,WILD,RAW"},
                {"Sardine", "SARDINE,ATLANTIC,CND IN OIL,DRND SOL W/BONE"},
                {"Shrimps", "SHRIMP,MIXED SPECIES,RAW"},
                {"Trout", "SEATROUT,MXD SP,CKD,DRY HEAT"},
                {"Asparagus", "ASPARAGUS,RAW"},
                {"Brokkoli", "BROCCOLI,RAW"},
                {"Carrots", "CARROTS,RAW"},
                {"Cucumber", "CUCUMBER,WITH PEEL,RAW"},
                {"Garlic", "GARLIC,RAW"},
                {"Green beans", "SOYBEANS,GREEN,RAW"},
                {"Onions", "ONIONS,RAW"},
                {"Pumpkin", "PUMPKIN,RAW"},
                {"Spinach", "SPINACH,RAW"},
                {"Tomatoes", "TOMATOES,GREEN,RAW"},
            };

            var item = await repository.GetItemAsync(nameDict[name]);

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