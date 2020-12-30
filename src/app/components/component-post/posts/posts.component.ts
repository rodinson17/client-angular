import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from 'src/app/entities/post';
import { DataService } from 'src/app/services/data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnDestroy, OnInit {

  listPosts: Post[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  data: any = [];


  constructor(private dataService: DataService) { }

  ngOnInit(){
    this.listPosts = [];
    this.dataService.getListData().subscribe(
      (posts: any) => {
        this.listPosts = posts;
        this.dtTrigger.next();
        console.log("datos.. " + this.listPosts);
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
