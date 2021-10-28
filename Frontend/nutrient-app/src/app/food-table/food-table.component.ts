import { Component, OnInit } from '@angular/core';
import { FoodData } from '../models/foodData';
import { FoodService } from '../service/foodService';
import { UserService } from '../service/userService';
import { IFoodData } from './IFoodData';

@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.css']
})
export class FoodTableComponent implements OnInit {

  public tableData: IFoodData[] = []

  private _foodService: FoodService;
  private _userService: UserService;

  constructor(foodService: FoodService, userService: UserService) {
    this._foodService = foodService;
    this._userService = userService;
  }

  async ngOnInit(): Promise<void> {
    const foodName: string = await this._userService.getImageName();
    console.log(foodName);
    
    let foodData: FoodData = await this._foodService.getFoodByName(foodName);
    console.log(foodData);
    
    let tableData: IFoodData = {
      foodName: foodName,
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
