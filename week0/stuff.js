"use strict";

var n = 8; 

//generate array with number from 1 to n
var arr = Array.apply(null, {length: Math.abs(n+1)}).map(Number.call, Number);
arr = arr.slice(1);

var res =  arr.filter(function(a){return (n % a === 0); }).reduce(function(a,b){ return a + b;});

console.log(res);