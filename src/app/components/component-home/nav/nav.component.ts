import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loginUser: boolean;

  constructor(private userService: UserService) { }

  onLogout() {
    this.userService.setLoginUser();
    this.loginUser = this.userService.loginUser;
  }

  ngOnInit(): void {
    this.loginUser = this.userService.loginUser;
  }

}
