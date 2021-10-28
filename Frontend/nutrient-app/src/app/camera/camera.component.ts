import { HtmlAstPath } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodData } from '../models/foodData';
import { FoodService } from '../service/foodService';
import { UserService } from '../service/userService';

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
  private _userService: UserService;
  private _router: Router;

  files: File[] = [];

  constructor(foodService: FoodService, userService: UserService, router: Router) {
    this._foodService = foodService;
    this._userService = userService;
    this._router = router;
  }

  onClick(){
      this.uploadImage(this.files);
  }

  

  onSelect(event: { addedFiles: any; }) {
    console.log(event);
    this.files.push(...event.addedFiles);
    console.log(this.files);
    
  }

  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  ngOnInit(): void {
    this.dropEle = document.getElementById('droparea');
  }

  async uploadImage(files: File[]) {
    let formData: FormData = new FormData();
    formData.append('file', files[0], files[0].name);
    console.log(formData);
    this._router.navigateByUrl('/foodtable');
    const food = await this._userService.uploadImage(formData);

  }

}
