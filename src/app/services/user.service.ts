import { User } from './../entities/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  listUsers: User[] = [
    new User(1, '11111', 'Pepito', 'Perez', 'PepitoP', 'pepito@gmail.com', 'pepitoP', '3131234567', '/assets/img/logo/angularjs-login.png'),
    new User(2, '22222', 'Rodinson', 'Tombe', 'RodinsonT', 'rodinson@gmail.com', 'rodinson17', '3001234567', '/assets/img/users/user-default.png')
  ];
  loginUser: boolean = false;

  constructor() { }

  getListUser() {
    return this.listUsers;
  }

  verifyDataLogin(email, password) {
    let userLogin = this.listUsers.find( user => (user.email == email && user.password == password) );
    return userLogin;
  }

  createNewUser(userData) {
    let oldUser = this.listUsers.find( user => user.email == userData.emailInput );

    if (oldUser) return true;

    oldUser = this.listUsers[this.listUsers.length - 1];
    this.listUsers.push( new User((oldUser.id + 1), '', '', '', userData.nameUserInput, userData.emailInput, userData.passwordInput, '', '/assets/img/logo/logo-angular.png') );

    return false;
  }

  getUserForID(id) {
    let user: User = this.listUsers.find( user => user.id == id );
    return user;
  }

  deleteUser(index) {
    this.listUsers.splice(index, 1);
  }

  setLoginUser() {
    console.log('value1', this.loginUser);
    this.loginUser = !this.loginUser;
    console.log('value2', this.loginUser);
  }

}
