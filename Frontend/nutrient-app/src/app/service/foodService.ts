import { Injectable } from "@angular/core";
import { FoodData } from "../models/foodData";
import { FoodDataRepository } from "../repository/fooddata.repository";

@Injectable()
export class FoodService {
  private _foodRepository: FoodDataRepository;

  constructor(foodRepository: FoodDataRepository){
    this. _foodRepository = foodRepository;
  }

  public async getFoodByName(foodName: string): Promise<FoodData> {
    const food: FoodData = await this._foodRepository.getFoodDataByName(foodName);

    return food;
  }
}
