import { UserService } from './../../../services/user.service';
import { User } from './../../../entities/user';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  listUsers: User[] = [];

  constructor(private userService: UserService) { }

  deleteUser(user: User, i) {
    Swal.fire({
      title: '¿Estas seguro?',
      html: `Eliminar el Post: <strong>${ user.name } ${ user.lastName }</strong>.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        this.userService.deleteUser(i);
        this.listUsers = this.userService.getListUser();

        Swal.fire(
          '¡Eliminado!',
          'El Post ha sido eliminado.',
          'success'
        )
      }
    })
  }

  ngOnInit(): void {
    this.listUsers = this.userService.getListUser();
  }

}
