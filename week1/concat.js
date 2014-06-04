"use strict";


var concat = function (a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else {
        throw new TypeError("Both values should be strings");
    }
};

exports.concat = concat;
