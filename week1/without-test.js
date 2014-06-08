"use strict";

var without = require("./without").without;

exports.testWithoutThrowOne = function (test) {
    test.throws(function () {
        without("sdf", "sdfgfhg");
    });
    test.done();
};

exports.testWithoutThrowTwo = function (test) {
    test.throws(function () {
        without([4], "sdfgfhg");
    });
    test.done();
};

exports.testWithoutThrowThree = function (test) {
    test.throws(function () {
        without("sdf", [1,5,9]);
    });
    test.done();
};
exports.testWithoutOne = function (test) {
    test.deepEqual([1, 2, 3, 4], without([5, 6], [1, 2, 3, 4, 5, 6]));
    test.done();
};

exports.testWithoutTwo = function (test) {
    test.deepEqual([1, 2, 3, 4], without([5, 6], [1, 5, 2, 5, 3, 4, 6]));
    test.done();
};

exports.testWithoutThree = function (test) {
    test.deepEqual([1, 2, 3, 4], without([5, 6], [1, 5, 2, 5, 3, 4, 6]));
    test.done();
};


exports.testWithoutFour = function (test) {
    test.deepEqual([1, 2, 3, 4], without([], [1,2,3,4]));
    test.done();
};