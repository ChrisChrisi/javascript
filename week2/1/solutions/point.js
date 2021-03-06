"use strict";

/**
 * Create a class `Point`, which takes two arguments - `x` and `y`, which are numbers.

 __Once created, `x` and `y` should be private!__ To get their value, use a getter method.

 Our class should have the following consturctor setters:

 * `xInc()` - increases the `x` value by 1
 * `xDec()` - decreases the `x` valye by 1
 * `yInc()` - increases the `y` value by 1
 * `yDec()` - decreases the `y` value by 1

 And the following prorotype methods:

 * `Point.prototype.equals = function(point) { ... }` - takes another `Point` and returns true if both `x` and `y` of both points are equal
 * `Point.prototype.toString` - returns the string representation of the point - `Point @ {x}, {y}`

 **/

function Point(x, y) {
    if(!(this instanceof Point)){
        return new Point(left, right);
    }

    this.getX = function () {
        return x;
    };

    this.getY = function () {
        return y;
    };

    this.xInc = function() {
        x += 1;
    };

    this.xDec = function() {
        x -= 1;
    };

    this.yInc = function() {
        y += 1;
    };

    this.yDec = function() {
        y -= 1;
    };

};

Point.prototype.equals = function (otherPoint) {
    if(!(otherPoint instanceof Point)){
        throw new TypeError("The argument should be Point object.");
    }

    return (this.getX() === otherPoint.getX() && this.getY() === otherPoint.getY());
};

//returns the string representation of the point - `Point @ {x}, {y}`
Point.prototype.toString = function () {
    return "Point @ ("
    + this.getX()
    + ","
    + this.getY()
    + ")";
};
//var point1 = new Point(1, 2);
//var point2 = new Point(3, 4);
//var point3 = new Point(1, 2);
//
//console.log(point1.equals(point3));
//console.log(point1.toString());

exports.Point = Point;