import { EmailInputComponent } from './../../component-form/email-input/email-input.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showError: boolean;
  viewPassword: boolean;
  emailInput: string;
  passwordInput: string;
  rememberInput:boolean = false;
  //@ViewChild(EmailInputComponent) email: EmailInputComponent;

  constructor() { }

  viewPasswordInput() {
    this.viewPassword = !this.viewPassword;

    if (this.viewPassword) {
      $('#passwordInput').prop("type", "text");
    } else {
      $('#passwordInput').prop("type", "password");
    }
  }

  onSubmit(loginForm) {
    console.log("datos: ", loginForm);
  }

  ngOnInit(): void { }

}
