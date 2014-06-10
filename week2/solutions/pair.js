"use strict";

function Pair(left, right) {
    this.left = left;
    this.right = right;
};

//the method takes another Pair and returns true if both left and right of both pairs are strictly equal
Pair.prototype.equals = function (otherPair) {
    return (this.left === otherPair.left && this.right === otherPair.right);
};

// returns the pair in the following string format - ({left}, {right}) where {left} and {right} are replaced by the given values.
Pair.prototype.toString = function () {
    return "({"
    + this.left
    + "}, {"
    + this.right
    + "})";
};

// returns a list of [left, right]
Pair.prototype.toList = function () {
    return [this.left, this.right]
};

//f is a function of two arguments (left and right) - combine returns the generated value of the passed function f
Pair.prototype.combine = function (f) {
    return f(this.left, this.right);
};

var pair1 = new Pair(1, 2);
var pair2 = new Pair(3, 4);
var pair3 = new Pair(1, 2);

var add = function (a, b) {
    return a + b;
};
console.log(pair1.equals(pair2));
console.log(pair2.toString());
console.log(pair3.toList());
console.log(pair1.combine(add));