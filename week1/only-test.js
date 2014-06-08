"use strict";

var only = require("./only").only;

var testArray = [1,2,3,4];

exports.testOnlyOne = function (test) {
    test.equal(false, only("string",testArray ));
    test.done();
};

exports.testOnlyTwo = function (test) {
    test.equal(true, only("number", testArray));
    test.done();
};