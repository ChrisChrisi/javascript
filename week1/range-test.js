"use strict";

var range = require("./range").range;

exports.testRangeThrowOne = function(test){
    test.throws(function(){
        range('tui','onui');
    });
    test.done();
};

exports.testRangeThrowTwo = function(test){
    test.throws(function(){
        range(15,5.3);
    });
    test.done();
};

exports.testRangeOne = function(test){
    test.deepEqual([11],range(11,11));
    test.done();
};

exports.testRangeTwo = function(test){
    test.deepEqual([11,12,13,14,15],range(11,15));
    test.done();
};

exports.testRangeThree = function(test){
    test.deepEqual([11,10,9,8,7,6],range(11,6));
    test.done();
};