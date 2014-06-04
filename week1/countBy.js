"use strict";

var countBy = function (countingFunction, arr) {
    var result = {};
    arr.forEach(function (a) {
        if(typeof(result[countingFunction(a)]) === 'undefined'){
            result[countingFunction(a)] = 0;        }
        result[countingFunction(a)] += 1;
    });

    return result;
};

exports.countBy = countBy;