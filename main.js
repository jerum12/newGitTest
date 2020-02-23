"use strict";
/*interface Point {
    a:number,
    b:number
}


let drawPoint = (abc: Point ) => {
    //...
    abc.a
}*/
exports.__esModule = true;
var point_1 = require("./point");
var point = new point_1.Point(1, 2);
//let x = point.x;
var x = point.getx();
//point.x = 10;
point.setx(10);
point.draw();
