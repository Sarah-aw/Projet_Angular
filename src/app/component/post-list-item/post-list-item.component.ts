import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Post } from '../../model/interface/post';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  readonly WIDTH = 600;
  readonly HEIGHT = 300;


  @Input()
  post!: Post;

  constructor() { 
  }

  ngOnInit(): void {
  }

  loveIt():void {
    this.post.lovesIts+=1;
  }

  hateIt():void {
    this.post.lovesIts-=1;
  }

  color(): string {
    if (this.post.lovesIts < 0 ) return '#f1655b';
    else if (this.post.lovesIts > 0 ) return '#12ac9c';
    return 'black';
  }
}