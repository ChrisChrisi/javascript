"use strict";

var groupBy = function (groupingFunction, arr) {
    var result = {};
    arr.forEach(function (a) {
        if(typeof(result[groupingFunction(a)]) === 'undefined'){
            result[groupingFunction(a)] = [];
        }
        result[groupingFunction(a)].push(a);
    });

    return result;
};

exports.groupBy = groupBy;
