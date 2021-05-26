import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/model/interface/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor() { }
  @Input ()
  posts: Post[] = [];

  ngOnInit(): void {
  }

}
