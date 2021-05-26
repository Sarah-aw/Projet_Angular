// import { TPoint, Point } from '../interface/point';

// class myPoint implements TPoint {
//     x!: number;
//     y!: number;

//     constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }
    
//     translate(delta_x: number, delta_y: number): boolean {
//         this.x = this.x + delta_x;
//         this.y += delta_y;

//         return false; 
//     }
// }

// let display = (p: myPoint) => {console.log(p.x, p.y)}


// let point = new myPoint(2, 5);
// let point2 = new myPoint(1, 0);

// display(point); // 2 5
// display(point2); // 1 0

// if (!point.translate(5, 10)){
//     console.log('Ajout des coordonnées sur le point "point"');
// };

// point2.translate(10, 6);

// display(point); // 7 15
// display(point2); // 11 6