"use strict";

var containsAll = require("./containsAll").containsALL;

exports.testContainsAllOne = function(test){
    test.equal(true,containsAll([1,3,9],[9,5,8,3,1]));
    test.done();
};

exports.testContainsAllTwo = function(test){
    test.equal(false,containsAll([1,3,9,33],[9,5,8,3,1]));
    test.done();
};