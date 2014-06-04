"use strict";

var all  = function(f, arr){
    var i = 0;
       var n = arr.length;
      for(i; i< n; i++){
         if(!f(arr[i])){
             return false;
         }
      }

    return true;
};

console.log(all(function(a){return a % 2 === 0;},[2,4,6]));