import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorsForms } from 'src/app/entities/errors-forms';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  showError: boolean;
  viewPassword: boolean;
  viewPasswordConfirm: boolean;
  loginForm = new FormGroup({
    nameUserInput: new FormControl('', [Validators.required]),
    emailInput: new FormControl('', [Validators.required, Validators.email]),
    passwordInput: new FormControl('', [Validators.required, Validators.minLength(8)]),
    passwordComfirmInput: new FormControl('', [Validators.required, Validators.minLength(8)]),
    acceptTermsInput: new FormControl('', [Validators.required])
  });

  errorMessage: ErrorsForms = new ErrorsForms();
  errorsUserNameInput: string = "";
  errorsEmailInput: string = "";
  errorsPasswordInput: string = "";
  errorsPassworConfirmdInput: string = "";
  msgAlert: string = "";

  constructor(private userService: UserService,
              private router: Router) { }

  viewPasswordInput() {
    this.viewPassword = !this.viewPassword;

    if (this.viewPassword) {
      $('#passwordInput').prop("type", "text");
    } else {
      $('#passwordInput').prop("type", "password");
    }
  }

  viewPasswordConfirmInput() {
    this.viewPasswordConfirm = !this.viewPasswordConfirm;

    if (this.viewPasswordConfirm) {
      $('#passwordComfirmInput').prop("type", "text");
    } else {
      $('#passwordComfirmInput').prop("type", "password");
    }
  }

  onKeyUpInputUserName() {
    this.errorsUserNameInput = this.errorMessage.validateErrors(this.nameUserInput.errors);
  }

  onKeyUpInputEmail() {
    this.errorsEmailInput = this.errorMessage.validateErrors(this.emailInput.errors);
  }

  onKeyUpInputPassword() {
    this.errorsPasswordInput = this.errorMessage.validateErrors(this.passwordInput.errors);
  }

  onKeyUpInputPasswordConfirm() {
    this.errorsPassworConfirmdInput = this.errorMessage.validateErrors(this.passwordComfirmInput.errors);
  }

  onSubmit() {
    console.log(this.loginForm.value);
    if (this.nameUserInput.value == "" || this.emailInput.value == "" || this.passwordInput.value == "" || this.passwordComfirmInput.value == "" || this.acceptTermsInput.value == false) {
      this.msgAlert = "Todos los campos son reuqeridos.";
      this.showError = true;
      return;
    }

    if (this.passwordInput.value != this.passwordComfirmInput.value) {
      this.msgAlert = "Los campos de contraseñas deben coincidir."
      this.showError = true;
      return;
    }

    if (this.userService.createNewUser(this.loginForm.value)) {
      this.msgAlert = "Debe verificar el campos Correo electrónico ya existe un usuario con ese correo."
      this.showError = true;
      return;
    }

    this.router.navigate(['/login']);
  }

  get nameUserInput() {
    return this.loginForm.get('nameUserInput');
  }

  get emailInput() {
    return this.loginForm.get('emailInput')
  }

  get passwordInput() {
    return this.loginForm.get('passwordInput')
  }

  get passwordComfirmInput() {
    return this.loginForm.get('passwordComfirmInput');
  }

  get acceptTermsInput() {
    return this.loginForm.get('acceptTermsInput');
  }

  ngOnInit(): void {
  }

}
