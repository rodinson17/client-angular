import { Location } from '@angular/common';
import { UserService } from './../../../services/user.service';
import { User } from './../../../entities/user';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userCurrent: User;
  UserID: string;
  actionTitle: string;
  actionbutton: string;
  userForm = new FormGroup({
    identification: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    passwordConfirm: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    photo: new FormControl('', [Validators.required]),
  });

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private location: Location,
              private userService: UserService) { }


  onGoBack() {
    this.location.back();
  }

  onSubmit() {
    console.log("Data form: ", this.userForm.value)
  }

  ngOnInit(): void {
    this.UserID = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.UserID == '0') {

      this.actionTitle = "Datos para crear un Usuario";
      this.actionbutton = "Guardar";
    } else {
      this.userCurrent = this.userService.getUserForID(this.UserID);
      console.log("user: ", this.userCurrent)
      this.actionTitle = "Datos del Usuario para actualizar";
      this.actionbutton = "Actualizar";
    }
  }

  get identification() { return this.userForm.get('identification'); }

  get name() { return this.userForm.get('name'); }

  get lastName() { return this.userForm.get('lastName'); }

  get userName() { return this.userForm.get('userName'); }

  get email() { return this.userForm.get('email'); }

  get password() { return this.userForm.get('password'); }

  get passwordConfirm() { return this.userForm.get('passwordConfirm'); }

  get phone() { return this.userForm.get('phone'); }

  get photo() { return this.userForm.get('photo'); }

}
