/*interface Point {
    a:number,
    b:number
}


let drawPoint = (abc: Point ) => {
    //...
    abc.a
}*/

import { Point } from './point'


let point:Point = new Point(1, 2);
//let x = point.x;
let x = point.getx();

//point.x = 10;
point.setx(10);
point.draw();

//JPG test 


//test2


//test1

