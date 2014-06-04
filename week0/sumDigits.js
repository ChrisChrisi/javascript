"use strict";

var sum_of_digits = function(n){
	return n.toString().split("").map(function(a){return parseInt(a);}).filter(function(a){return !isNaN(a) ;}).reduce(function(a,b){return a + b;});
};
exports.sum_of_digits = sum_of_digits;