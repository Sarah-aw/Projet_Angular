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

  // @ViewChild('canvas', { static: true })
  // canvas!: ElementRef<HTMLCanvasElement>;

  // ctx!: CanvasRenderingContext2D;

 // balls!: Ball[];

  constructor() { 
    // while (this.balls?.length < 25) {
    //   let size = this.random(10,20);
    //   let ball = new Ball(
    //     // ball position always drawn at least one ball width
    //     // away from the edge of the canvas, to avoid drawing errors
    //     this.random(0 + size,this.WIDTH - size),
    //     this.random(0 + size,this.HEIGHT - size),
    //     this.random(-7,7),
    //     this.random(-7,7),
    //     'rgb(' + this.random(0,255) + ',' + this.random(0,255) + ',' + this.random(0,255) +')',
    //     size
    //   );
    
    //   this.balls.push(ball);
    // }
  }

  ngOnInit(): void {
    // this.ctx = this.canvas.nativeElement.getContext('2d')!;
    // var x = 0;
    // setInterval(() => {
    //   this.ctx.clearRect(0, 0, 200, 200);
    //   this.ctx.clearRect(0, 0, 200, 200);
    //   this.drawCircle(x % 200);
    //   this.drawBorder(x % 200);
    //   x++;
    // }, this.random(0,25));

//     let testBall = new Ball(50, 100, 4, 4, 'blue', 10);
//     testBall.x
// testBall.size
// testBall.color
// testBall.draw(this.ctx);

//this.loop(this.ctx);

// this.ctx!.fillStyle = 'rgba(25, 0, 0, 0.25)';
//     this.ctx!.fillRect(0, 0, this.WIDTH, this.HEIGHT);

  }

  // ngAfterViewInit() {
  // }

  // random(min: number, max: number): number {
  //   let num = Math.floor(Math.random() * (max - min + 1)) + min;
  //   return num;
  // }

  // drawCircle(x: any): void {
  //   this.ctx.beginPath();
  //   this.ctx.arc(x-10, 100, 10, 0, 2 * Math.PI);
  //   this.ctx.fillStyle = "red";
  //   this.ctx.fill();
  // }

  // drawBorder(x: any): void {
  //   this.ctx.beginPath();
  //   this.ctx.moveTo(0, 0);
  //   this.ctx.lineTo(200, 0);
  //   this.ctx.lineTo(200, 200);
  //   this.ctx.lineTo(0, 200);
  //   this.ctx.lineTo(0, 0);
  //   this.ctx.stroke();
  // }

  loveIt():void {
    this.post.lovesIts+=1;
  }

  hateIt():void {
    this.post.lovesIts-=1;
  }

  color(): string {
    if (this.post.lovesIts < 0 ) return 'red';
    else if (this.post.lovesIts > 0 ) return 'green';
    return 'grey';
  }

}
