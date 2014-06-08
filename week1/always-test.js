"use strict";

var always = require("./always").always;

exports.testAlwaysOne = function(test){
    test.equal(5, always(5));
    test.done();
};

exports.testAlwaysTwo = function(test){
    test.deepEqual([1,2,3], always([1,2,3]));
    test.done();
};
