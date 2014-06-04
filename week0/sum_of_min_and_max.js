"use strict";

/**
var sum_of_min_and_max = function(arr) {
    // implementation
}

Test examples

sum_of_min_and_max([1,2,3,4,5,6,8,9]) === 10
sum_of_min_and_max([-10,5,10,100]) === 90
sum_of_min_and_max([1]) === 2

**/

var sum_of_min_and_max = function(arr) {
	var sortedArr = arr.sort(function(a,b){return (a - b);});
	
	return (sortedArr[0] +  sortedArr[sortedArr.length - 1] );
};

exports.sum_of_min_and_max = sum_of_min_and_max;