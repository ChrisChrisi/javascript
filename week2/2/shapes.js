/**
 * We are going to try some basic JavaScript inheritence.

 In the file shapes.js, there is a type, called Shape with a getType() method, attached to this and area() method, attached to Shape.prototype

 You have to implemented 3 other types (classes):

 Rectangle
 Triangle
 Circle

 Each new class should inherit Shape and provide the proper string for the type argument (i.e "rectangle" for Rectangle class)

 Each new class should implement its area() method. The needed arguments should be provided via the constructor of the class (for example - the sides of the rectangle)

 After you have implemented the classes, take a look at their prototype chains to understand what is going on!
 */

function Shape(type) {
    if((this instanceof Shape)){}
    this.getType = function () {
        return type;
    }
}

Shape.prototype.area = function () {
    throw new Error("Cannot call area of Shape. Use subclasses!");
};

function Rectangle(width, height) {
    Shape.call(this, "rectangle");
    this.getWidth = function () {
        return width;
    };

    this.getHeight = function () {
        return height;
    };
};

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.constructor = Rectangle;

Rectangle.prototype.area = function () {
    return this.getWidth() * this.getHeight();
};

//var rect1 = new Rectangle(3,4);
//console.log(rect1.area());
//console.log(rect1.getType());

function Triangle(side1, side2, side3) {
    Shape.call(this, "triangle");

    this.getSide1 = function () {
        return side1;
    };

    this.getSide2 = function () {
        return side2;
    };

    this.getSide3 = function () {
        return side3;
    };
};

Triangle.prototype = Object.create(Shape.prototype);
Triangle.constructor = Triangle;

Triangle.prototype.area = function () {
    var a = this.getSide1();
    var b = this.getSide1();
    var c = this.getSide1();
    var s = parseFloat((a + b + c) / 2);
    return (Math.sqrt(s*(s - a)*(s - b)*(s - c)));
};

//var triangle1 = new Triangle(5,12,13);
//console.log(triangle1.area());
//console.log(triangle1.getType());


function Circle(radius){
    Shape.call(this, "circle");
    this.getRadius = function(){
        return radius;
    };
}

Circle.prototype = Object.create(Shape.prototype);
Circle.constructor = Circle;

Circle.prototype.area = function(){
   var r = this.getRadius();
    return (3.14*r*r);
};

//var circle1 = new Circle(5);
//console.log(circle1.area());
//console.log(circle1.getType());
