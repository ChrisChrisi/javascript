"use strict";

var Point = require("./point").Point;

Number.prototype.times = function(action){
    if(this < 0 || this%1 !== 0){
        throw new TypeError("Wrong input!");
    }
    var i = 0;
    while(i < this){
        action();
        i += 1;

        if(i > 100){
            throw  new TypeError("what is happening?");
        }
    }
};

function Robot(point) {
    if (!(this instanceof Robot)) {
        return new Robot(point);
    }

    if (!(point instanceof Point)) {
        throw new TypeError("The argument should be Point object!");
    }


    this.getPosition = function () {
        return point;
    };

    this.moveLeft = function (amount) {
        (amount).times(point.xDec);
    };

    this.moveRight = function (amount) {
        (amount).times(point.xInc);
    };

    this.moveDown = function (amount) {
        (amount).times(point.yDec);
    };

    this.moveRight = function (amount) {
        (amount).times(point.yInc);
    };
}

var robot = new Robot(new Point(0, 0));

robot.moveLeft(10);
robot.moveDown(5);
//
console.log(robot.getPosition().toString())


