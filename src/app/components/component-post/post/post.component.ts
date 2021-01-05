import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Post } from 'src/app/entities/post';
import { User } from './../../../entities/user';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { UserService } from './../../../services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post;
  postId: string;
  actionTitle: string = "";
  actionbutton: string = "";
  listUsers: User[] = [];
  postForm = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required, Validators.maxLength(300)]),
  });

  constructor(private dataService: DataService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private location: Location)
  {
    this.listUsers = this.userService.listUsers;
  }

  /* onChange(event) {
    console.log("llega: ", event.target.value)
    console.log("dat1: ", this.userId.value)
    //this.userId.setValue(event.target.value, {onlySelf: true});
    //console.log("dat1: ", this.userId.value)
  } */

  onSubmit() {
    if (this.postId == '0') {
      this.dataService.createNewPost(this.postForm.value)
        .subscribe( (result) => {
          console.log("New Post: ", result);
          this.router.navigate(['/posts']);
        }, error => console.log(error));
    } else {
      this.post.userId = this.userId.value;
      this.post.title = this.title.value;
      this.post.body = this.body.value;

      this.dataService.updatePost(this.post)
        .subscribe( (result) => {
          console.log("Update Post: ", result);
          this.router.navigate(['/posts']);
        }, error => console.log(error));
    }
  }

  get userId() {
    return this.postForm.get('userId');
  }

  get title() {
    return this.postForm.get('title');
  }

  get body() {
    return this.postForm.get('body');
  }

  ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.postId != '0') {
      this.dataService.getPostForID(this.postId).subscribe(
        (data: Post) => {
          this.post = {...data}
          this.postForm.setValue({
            userId: this.post.id,
            title: this.post.title,
            body: this.post.body
          });
        console.log("origin: ", this.post)
        }
      );
      this.actionTitle = "Detalles del Post para Actualizar";
      this.actionbutton = "Actualizar";
      return;
    }

    this.actionTitle = "Datos para crear un nuevo Post";
    this.actionbutton = "Guardar";
  }

  onGoBack() {
    this.location.back();
  }

}
