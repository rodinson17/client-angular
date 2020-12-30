import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    console.log('id:.. ' + postId);
  }

  onGoBack() {
    this.location.back();
  }

}
