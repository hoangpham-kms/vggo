import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login.model';

@Component({
  selector: 'vg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel = { username: '',  password: ''};
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

  closeStaticModel() {
    this.submitted = false;
  }

}
