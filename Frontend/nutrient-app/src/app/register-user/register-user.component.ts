import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(router: Router) { 
    this._router = router;
  }

  ngOnInit(): void {
  }

  registerUser(){
    if (this.username != ''){
      if (this.password != '' && this.repeatedPassword != ''){
        if (this.password === this.repeatedPassword && this.username != ''){
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
