"use strict";

/**
 *

 Test Examples

 list_to_number([1,2,3]) === 123
 list_to_number([9,9,9,9,9]) === 99999
 list_to_number([1,2,3,0,2,3]) === 123023

 */

var list_to_number = function(digits){
   return digits.reduce(function(a, b){
       return a + b.toString();
   });
};

console.log(list_to_number([1,2,3]));