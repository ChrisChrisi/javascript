"use strict";

/**
 * Reduce arrays

 Implement a reducing function, that takes a binary operation (a function of two arguments), an array and a starting value.

 The function should return a single value, that is obtained by accumulating the result of the operation for every element in the array.

 For example, lets have the following array: [a1, a2, a3, a4, a5] and a binary operation: oper and a starting value: start

 If we reduce the given list with the given binary operation, we will obtain the following result: start oper a1 oper a2 oper a3 oper a4 oper a5

 If oper is the plus sign (+), we will have : start + a1 + a2 + a3 + a4 + a5, which is the sum of all elements in the list.

 This is an example of the reduce method of lists in JavaScript:

 var sum = function(arr) {
     return arr.reduce(function(acc, next) {
         return acc + next;
     }, 0);
 };

 **/

var reduce =  function(arr,f, first){
    if(typeof first != 'undefined'){
        accumulate = first;
    }
    else {
        var accumulate = arr.shift();
    }
    arr.forEach(function(a){
        accumulate = f(accumulate, a);
    });

    return accumulate;
};
var array = [1,2,3,4]
console.log(reduce(array, function(a, b){return a + b;}));