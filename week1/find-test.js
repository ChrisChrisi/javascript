"use strict";

var find = require("./find").find;

exports.testFindOne = function (test) {
    test.equal(22, find(function (a) {
        return a % 2 === 0;
    }, [5, 22, 7, 9]));
    test.done();
};

exports.testFindOne = function (test) {
    test.equal(undefined, find(function (a) {
        return a % 2 === 0;
    }, [5, 11, 7, 9]));
    test.done();
};