import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../login/user';
import { UserService } from '../service/userService';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  username: string = "";
  age: number = 20;
  password: string = "";
  repeatedPassword: string= "";

  private _router: Router;
  private _userService: UserService;

  constructor(router: Router, userService: UserService) {
    this._router = router;
    this._userService = userService;
  }

  ngOnInit(): void {
  }

  registerUser(){
    if (this.username != ''){
      if (this.password != '' && this.repeatedPassword != ''){
        if (this.password === this.repeatedPassword && this.username != ''){
          this._userService.createUser({
            name: this.username,
            age: this.age,
            password: this.password,
          })
          this._router.navigateByUrl('/login');
        } else {
          alert('Your passwords do not match!');
        }
      }else {
        alert('please enter a password!');
      }
    } else {
      alert('Please enter a username!');
    }


  }

}
