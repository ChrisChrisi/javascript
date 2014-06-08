"use strict";

/**
 *
 Test examples

 is_increasing([1,2,3,4,5]) === true
 is_increasing([1]) === true
 is_increasing([5,6,-10]) === false
 is_increasing([1,1,1,1]) === false

 */

var is_increasing = function (seq) {
    return !(seq.some(function (a, i) {
        return a >= seq[i + 1];
    }));
};

console.log(is_increasing([1,1,1,1]));