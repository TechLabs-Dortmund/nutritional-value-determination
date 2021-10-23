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
    saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
    removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove' };


  constructor() { }



  ngOnInit(): void {
    this.dropEle = document.getElementById('droparea');
  }

}
