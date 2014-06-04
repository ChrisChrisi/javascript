"use strict";

// we require the module name - without .js
// and after this - the function that we want to test
var sum = require("./sum").sum;

exports.testSumZero = function(test) {
    test.equal(3, sum(1,2));
    test.done();
};

exports.testSumOne = function(test) {
    test.throws(function() {
        sum('1',2);
    });
    test.done();
};

exports.testSumTwo = function(test) {
    test.throws(function() {
        sum('1','2');
    });
    test.done();
};