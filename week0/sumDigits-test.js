"use strict";

var sum_of_digits = require("./sumDigits").sum_of_digits;

exports.testOne = function(test){
	test.equal(43,sum_of_digits(1325132435356));
	test.done();
};

exports.testTwo = function(test){
	test.equal(1,sum_of_digits(-10));
	test.done();
};

exports.testThree = function(test){
	test.equal(6,sum_of_digits(123));
	test.done();
};
exports.testFour = function(test){
	test.equal(6,sum_of_digits(6));
	test.done();
};
