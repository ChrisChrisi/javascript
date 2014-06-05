"use strict";

/**
 * console.log(zip([1, 2, 3], [4, 5, 6]));
 // [ [1, 4], [2, 4], [3, 6] ]

 console.log(zip([1, 2, 3], [4, 5, 6], [7, 8, 9]));
 // [ [1, 4, 7], [2, 4, 8], [3, 6, 9] ]
 */
var zip = function (arrayOfArrays) {
    var firstLength = arrayOfArrays[0].length;
    if (arrayOfArrays.some(function (a) {
        return a.length != firstLength
    })) {
        throw new TypeError("All subArrays must be the same length!");
    }

    result = [];
    var first = arrayOfArrays[0];
    arrayOfArrays = arrayOfArrays.slice(1);
    arrayOfArrays.forEach(function(array){
        array.forEach(function(a, i){
            
        });
    });
}


