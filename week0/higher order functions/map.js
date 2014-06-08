"use strict";

/**
 * Let's map

 Implement a basic map function with the following signature: map(f, arr)

 This functions maps f on each element of arr, creating an entirely new array.

 For example:

 var result = map(function(x) {
     return x * x;
 }, [1,2,3]);

 console.log(result); // [1, 4, 9]

 */


var map = function(f, arr){
    if(!Array.isArray(arr)){
        return false;
    }
    var result = []
    //return f(arr[i], i, arr);
    arr.forEach (function( a,i){
        result.push(f(a, i));
    });
    return result;
};

var result = map(function(x) {
    return x * x;
}, [1,2,3]);

console.log(result); // [1, 4, 9]