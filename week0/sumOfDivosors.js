"use strict";

var sum_of_divisors = function(n) {

// generate array of numbers from 1 to n
var arr = Array.apply(null, {length: Math.abs(n+1)}).map(Number.call, Number);
arr = arr.slice(1);

return arr.filter(function(a){return (n % a === 0); }).reduce(function(a,b){ return a + b;});
};

console.log(sum_of_divisors(7));