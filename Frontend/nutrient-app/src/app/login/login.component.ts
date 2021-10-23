import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodData } from '../models/foodData';
import { UserService } from '../service/userService';
import { User } from './user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = {
    id: 1,
    name: "Niklas",
    password: "",
  }

  private _userService: UserService;
  private _router: Router;

  constructor(userService: UserService, router: Router) {
    this._userService = userService;
    this._router = router;
   }

  ngOnInit(): void {
  }

  async loginUser(){
    let apiUser: User = await this._userService.getUserByName(this.user.name);
    console.log(apiUser);
    if (apiUser != null){
      if (this.user.password === apiUser.password){
        this._router.navigateByUrl('/camera');
      }
    }
  }

  registerUser(){
    console.log(this.user.password);
  }

}
