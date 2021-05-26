"use strict";
exports.__esModule = true;
var myPoint = /** @class */ (function () {
    function myPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    myPoint.prototype.translate = function (delta_x, delta_y) {
        this.x = this.x + delta_x;
        this.y += delta_y;
        return false;
    };
    return myPoint;
}());
var display = function (p) { console.log(p.x, p.y); };
var point = new myPoint(2, 5);
var point2 = new myPoint(1, 0);
display(point); // 2 5
display(point2); // 1 0
if (!point.translate(5, 10)) {
    console.log('Ajout des coordonnées sur le point "point"');
}
;
point2.translate(10, 6);
display(point); // 7 15
display(point2); // 11 6
