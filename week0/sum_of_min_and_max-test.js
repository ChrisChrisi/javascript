"use strict";

var sum_of_min_and_max = require("./sum_of_min_and_max").sum_of_min_and_max;

exports.testOne = function(test){
	test.equal(10,sum_of_min_and_max([1,2,3,4,5,6,8,9]));
	test.done();
};
