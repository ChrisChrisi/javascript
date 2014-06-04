"use strict";

/**
 *

 The function returns a list of integers, staring with from and finishing with to inclusive.

 For example range(1,10) would give us the [1,2,3,4,5,6,7,8,9,10] list.

 Try to implement the function, using recursion and [].concat!
 */

var range = function(from, to) {
    var result = [from];

    if(from > to){
        throw new TypeError("The first value must be < from the second! ");
    }
    else if(typeof from != "number" || typeof to != "number"){
        throw new TypeError("The two values  mus be numbers!");
    }
    else if(from === to){
        return result;
    }
    else {
        return range(from, to-1).concat([to]);
    }

};

console.log(range(11,9));
