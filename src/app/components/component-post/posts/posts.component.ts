import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from 'src/app/entities/post';
import { DataService } from 'src/app/services/data.service';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnDestroy, OnInit {

  listPosts: Post[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private dataService: DataService) { }

  deletePost(post: Post, index: any) {
    Swal.fire({
      title: '¿Estas seguro?',
      html: `Eliminar el Post: <strong>${ post.title }</strong>.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.dataService.deletePost(post.id, index)
          .subscribe( () => {
            console.log("Post Eliminado...");
            this.getListPost();
          }, error => console.log(error));

        Swal.fire(
          '¡Eliminado!',
          'El Post ha sido eliminado.',
          'success'
        )
      }
    })
  }

  getListPost() {
    this.listPosts = this.dataService.listPost;
  }

  ngOnInit(){
    console.log("ngOnInit");
    //this.listPosts = [];
    this.dataService.getListData().subscribe(
      (posts: any) => {
        this.listPosts = posts;
        this.dtTrigger.next();
        this.dataService.listPost = this.listPosts;
      },
      error => console.log("Error: " + error)
    );

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
