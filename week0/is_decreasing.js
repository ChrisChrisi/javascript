"use strict";
/**
 * >>> is_decreasing([5,4,3,2,1]) === true
 >>> is_decreasing([1,2,3]) === false
 >>> is_decreasing([100, 50, 20]) === true
 >>> is_decreasing([1,1,1,1]) === false

 */
var is_decreasing = function(seq) {
    return !(seq.some(function(a, i){
        return (a <= seq[i+1]);
    }));
};

console.log(is_decreasing([1]));
