"use strict";
/**
 *    any returns true if any of the elements in arr returns true if called with the predicate pred. False otherwise.
 */
var any  = function(f, arr){
    var i = 0;
       var n = arr.length;
      for(i; i< n; i++){
         if(f(arr[i])){
             return true;
         }
      }

    return false;
};

console.log(any(function(a){return a % 2 === 0;},[1,5,3]));