"use strict";

var concat = require("./concat").concat;

exports.testConcatOne = function(test){
    test.throws(function(){
        concat(1,2);
    });
    test.done();
};

exports.testConcatTwo = function(test){
    test.throws(function(){
        concat('5',2);
    });
    test.done();
};

exports.testConcatThree = function(test){
    test.equal('12',concat('1','2'));
    test.done();
};