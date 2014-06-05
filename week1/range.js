"use strict";

/**
 *

 The function returns a list of integers, staring with from and finishing with to inclusive.

 For example range(1,10) would give us the [1,2,3,4,5,6,7,8,9,10] list.
         and range(10,5) would give us the [10,9,8,7,6,5] list.

 Try to implement the function, using recursion and [].concat!
 */

var range = function (from, to) {

    var result = [from];

    if (typeof from != "number" || typeof to != "number" || !(from % 1 === 0) || !(to % 1 === 0)) {
        throw new TypeError("The two values  must be integer numbers!");
    }
    if (from === to) {
        return result;
    }
    else {
        if (from < to) {
            return range(from, to - 1).concat([to]);
        }
        else {
            return range(from, to + 1).concat([to]);
        }
    }

};

exports.range = range;
