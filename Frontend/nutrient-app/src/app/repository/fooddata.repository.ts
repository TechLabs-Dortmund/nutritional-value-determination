import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';

import { FoodData } from '../models/foodData';
import { FoodDataRequest } from '../models/foodDataRequest';

@Injectable({
  providedIn: 'root',
})
export class FoodDataRepository {

  private _httpClient: HttpClient;

  private _FoodDataAPIUrl!: string;
  private _subdomain = 'items';

  constructor(
    httpClient: HttpClient,
  ) {
    this._httpClient = httpClient;
    this._FoodDataAPIUrl = 'https://localhost:5001';
  }

  public async getFoodDataByName(name: string): Promise<FoodData> {
    const headers: HttpHeaders = new HttpHeaders()
      .set('accept', 'application/json');

    const FoodData: FoodData = await this._httpClient.get<FoodData>(
      `${this._FoodDataAPIUrl}/${this._subdomain}/${name}`,
      {headers: headers},
    )
      .toPromise();

    return FoodData;
  }


}
