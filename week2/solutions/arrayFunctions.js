"use strict";

/**
 * Extend Array.prototype with the following methods:

 Array.prototype.first - returns the first element from the array of throws an exception
 Array.prototype.range = function(from, to) { ... } - returns a new array with the numbers from from to to

 For example:

 [].range(1,10); // [1,2,3,4,5,6,7,8,9,10]

 Array.prototype.sum - returns the sum of all elements of the array.
 We rely on that the array is only of numbers

 Array.prototype.average - returns the average value of all elements in the array. Again, we rely on the fact that all elements are numbers

 */
Array.prototype.first = function(){
    if(this.length === 0){
        throw new TypeError("The array should have at least one element");
    };
    return this[0];
};

Array.prototype.range = function (from, to) {


    if (typeof from != "number" || typeof to != "number" || !(from % 1 === 0) || !(to % 1 === 0)) {
        throw new TypeError("The two values  must be integer numbers!");
    }
    if (from === to) {
        return this.push(from);
    }
    else if (from > to) {
        while (from > to) {
            this.push(from);
            from -= 1;
        }
    }
    else {
        while (to > from) {
            this.push(from);
            from += 1;
        }
    }

    return this

};

Array.prototype.sum = function () {
    if (this.length === 0) {
        throw new TypeError("The array should have at least one element.");
    }
    if (this.some(function (a) {
        return typeof a !== "number";
    })) {
        throw new TypeError("All elements of the array should be numbers.");
    };

    return this.reduce(function (a, b) {
        return a + b;
    });
};

Array.prototype.average = function(){
    return this.sum() / this.length;
};



