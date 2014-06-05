"use strict";

/**
 * The function returns the first element, that matches the predicate with true. If no element is found, return undefined.
 */
var find = function(predicate, arr) {
    var result = undefined;
    arr.some(function(a){
        if(predicate(a)){
            result = a;
            return true;
        }
    });
    return result;
};

exports.find = find;