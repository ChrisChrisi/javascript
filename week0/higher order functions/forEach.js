"use strict";

var forEach = function(f,arr){
  var i = 0;
     var n = arr.length;
    for(i; i< n; i++){
       return f(arr[i], i, arr);
    }
};

var info =[{
    "fruit" : "apple",
    "color": "green",
    "count": 5
}];

forEach(function(value, key) {
   console.log(key, value);
}, info);
