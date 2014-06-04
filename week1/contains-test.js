"use strict";

var cotains = require("./contains").contains;

exports.testContainsOne = function(test){
    test.equal(true, cotains(1,[2,3,5,1,9,7]));
    test.done();
};


exports.testContainsTwo = function(test){
    test.equal(false, cotains(22,[2,3,5,1,9,7]));
    test.done();
};