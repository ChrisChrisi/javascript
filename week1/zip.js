"use strict";

/**
 * console.log(zip([1, 2, 3], [4, 5, 6]));
 // [ [1, 4], [2, 4], [3, 6] ]

 console.log(zip([1, 2, 3], [4, 5, 6], [7, 8, 9]));
 // [ [1, 4, 7], [2, 4, 8], [3, 6, 9] ]
 */
var zip = function () {
    var args = arguments;
    if (!args || args.length === 0 || args[0].length == 0) {
        return [];
    }
    var allArgs = Object.keys(args).map(function (k) {
        return args[k];
    });

    if (allArgs.some(function (a) {
            return !Array.isArray(a);
        })) {
        throw new TypeError("All arguments should be arrays");
    }
    else {

        var length = args.length;
        var fLength = args[0].length;
        var i;
        var j;
        var result = [];
        for (i = 0; i < fLength; i++) {
            result[i] = [];
            for (j = 0; j < length; j++) {
                result[i].push(args[j][i]);
            }
        }
        return result;
    }
};
console.log(zip(zip([1, 8], [5, 9, 8], "dsfds")));
exports.zip = zip;



