"use strict";

var without = function(exclude, arr) {
    if(!Array.isArray(arr) || !Array.isArray(exclude) ){
        throw new TypeError("Both arguments must be arrays!");
    }
    return arr.filter(function(a){return !(exclude.indexOf(a) >=0);});
};

//console.log(without([5,6], [1,2,3,4,5,6]));

exports.without = without;
