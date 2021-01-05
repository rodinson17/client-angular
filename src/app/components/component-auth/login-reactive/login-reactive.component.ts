import { Router } from '@angular/router';
import { NavComponent } from './../../component-home/nav/nav.component';
import { UserService } from './../../../services/user.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorsForms } from './../../../entities/errors-forms';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit, OnDestroy {

  //@ViewChild(NavComponent) navView:
  @ViewChild(NavComponent) navView: NavComponent;

  showErrorAlert: boolean;
  viewPassword: boolean;
  loginForm = new FormGroup({
    emailInput: new FormControl('', [Validators.required, Validators.email]),
    passwordInput: new FormControl('', [Validators.required, Validators.minLength(8)]),
    rememberInput: new FormControl('')
  });

  errorMessage: ErrorsForms = new ErrorsForms();
  errorsEmailInput: string = "";
  errorsPasswordInput: string = "";
  msgAlert: string = "";

  constructor(private userService: UserService,
              private router: Router) { }

  get emailInput() {
    return this.loginForm.get('emailInput')
  }

  get passwordInput() {
    return this.loginForm.get('passwordInput')
  }

  get rememberInput() {
    return this.loginForm.get('rememberInput')
  }

  viewPasswordInput() {
    this.viewPassword = !this.viewPassword;

    if (this.viewPassword) {
      $('#passwordInput').prop("type", "text");
    } else {
      $('#passwordInput').prop("type", "password");
    }
  }

  onKeyUpInputEmail() {
    this.errorsEmailInput = this.errorMessage.validateErrors(this.emailInput.errors);
  }

  onKeyUpInputPassword() {
    this.errorsPasswordInput = this.errorMessage.validateErrors(this.passwordInput.errors);
  }

  onSubmit() {
    console.log(this.emailInput.value);
    if (this.emailInput.value === "" && this.passwordInput.value === "") {
      this.msgAlert = "Los campos Correo electrónico y Contraseña son requeridos.";
      this.showErrorAlert = true;
    } else {
      let user = this.userService.verifyDataLogin(this.emailInput.value, this.passwordInput.value)

      if (user) {
        this.userService.setLoginUser();
        //this.navView.onLogout();
        this.router.navigate(['/posts']);
      } else {
        this.msgAlert = "Debe verificar los campos Correo electrónico y Contraseña.";
        this.showErrorAlert = true;
      }
    }
  }

  onEventKeyPress(event) {
    if (event.code === "keypress") {
      console.log('Presiono la tecla enter')
    }
  }

  onActiveEventKeyPress() {
    document.addEventListener("keypress", (event) => {
      this.onEventKeyPress(event);
    });
  }

  ngOnInit(): void {
    this.onActiveEventKeyPress();
  }

  ngOnDestroy(): void {
    document.removeEventListener("keypress", this.onEventKeyPress );
  }

}
