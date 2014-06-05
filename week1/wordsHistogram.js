"use strict";

var wordsHistogram = function (str) {
    if(typeof str != "string"){
        throw new TypeError("The argument should be string!");
    }
    str = str.toLowerCase();
    str = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    var result = {};
    if (str.length < 1) {
        return result;
    }
    var words = str.split(" ");

    words.forEach(function (element) {
        if (typeof(result[element]) === 'undefined') {
            result[element] = 0;
        }
        result[element] += 1;
    });

    return result;
};

exports.wordsHistogram = wordsHistogram;