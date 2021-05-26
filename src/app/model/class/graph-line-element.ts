// import { CanvasElement, NgCanvasElement, NgCanvas } from 'angular-canvas';

// @CanvasElement({
//   selector: 'graph-line'
// })
// export class GraphLineElement implements NgCanvasElement {
//     // parent element  
//     public parent!: NgCanvas;
   
//     // canvas element redraw until all NgCanvasElement needDraw as true
//     public needDraw!: boolean;

//     setNgProperty(name: string, value: any): void {

//       // redraw all element in one canvas context after set ng property
//       this.parent.drawAll(); 
//     }
  
//     draw(context: CanvasRenderingContext2D, time: number): void {
//       context.strokeStyle = 'red';
//     }
// }