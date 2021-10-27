import { Component, OnInit } from '@angular/core';
import { FoodData } from '../models/foodData';
import { FoodService } from '../service/foodService';
import { IFoodData } from './IFoodData';

@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.css']
})
export class FoodTableComponent implements OnInit {

  public tableData: IFoodData[] = [{
    foodName: 'sampleFood',
    kcal: 0,
    carbs: 0,
    sugars: 0,
    fats: 0,
    satFats: 0,
    proteins: 0,
    fibers: 0
  }]

  private _foodService: FoodService;

  constructor(foodService: FoodService) {
    this._foodService = foodService;
  }

  async ngOnInit(): Promise<void> {
    // Get foodName from Python API
    let name = '';
    let foodData: FoodData = await this._foodService.getFoodByName(name);
    let tableData: IFoodData = {
      foodName: foodData.foodName,
      kcal: foodData.kcal,
      carbs: foodData.kcal,
      sugars: foodData.sugars,
      fats: foodData.fat,
      satFats: foodData.satFat,
      proteins: foodData.protein,
      fibers: foodData.fibers,
    };
    this.tableData.push(tableData);
  }

}
