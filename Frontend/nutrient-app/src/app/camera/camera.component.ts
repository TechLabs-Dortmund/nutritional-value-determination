import { HtmlAstPath } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FoodData } from '../models/foodData';
import { FoodService } from '../service/foodService';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  public dropEle: HTMLElement | null = null;

  public path: Object = {
    //AI API POST PATH HERE
    saveUrl: 'http://127.0.0.1:5000/',
    removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove' };

    
  private _foodService: FoodService;

  files: File[] = [];

  constructor(foodService: FoodService) {
    this._foodService = foodService;
  }

  onClick(){
      console.log('getting foodData');
      //redirect to foodTable component
      //there, get foodDatafrom API and show it in grid
  }

  

  onSelect(event: { addedFiles: any; }) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  ngOnInit(): void {
    this.dropEle = document.getElementById('droparea');
  }

}
