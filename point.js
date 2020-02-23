"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    //for Optional param add ?
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log("x:" + this._x + ", y: " + this._y);
    };
    Point.prototype.getx = function () {
        return this._x;
    };
    Point.prototype.setx = function (value) {
        if (value < 0)
            throw new Error('value cannot be less than 0.');
        this._x = value;
    };
    return Point;
}());
exports.Point = Point;
