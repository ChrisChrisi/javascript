"use strict";

var sum = function (a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        throw new TypeError("Both values should be numbers");
    }
};

exports.sum = sum;