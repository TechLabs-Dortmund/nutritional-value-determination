import { HtmlAstPath } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

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

    
  constructor() { }

    onClick(){
      console.log('getting foodData');
      //redirect to foodTable component
      //there, get foodDatafrom API and show it in grid
    }

  ngOnInit(): void {
    this.dropEle = document.getElementById('droparea');
  }

}
