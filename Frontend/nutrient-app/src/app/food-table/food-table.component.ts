import { Component, OnInit } from '@angular/core';
import { IFoodData } from './IFoodData';

@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.css']
})
export class FoodTableComponent implements OnInit {

  public tableData: IFoodData = {
    foodName: 'sampleFood',
    kcal: 0,
    carbs: 0,
    sugars: 0,
    fats: 0,
    satFats: 0,
    proteins: 0,
    fibers: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
