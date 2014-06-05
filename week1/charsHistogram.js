"use strict";

var charsHistogram = function (str) {
    if(typeof str != "string"){
        throw new TypeError("The argument should be string!");
    }
    str = str.toLowerCase();
    str = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\s\{\}\[\]\\\/]/gi, '');
    var words = str.split("");
    var result = {};
    words.forEach(function (element) {
        if (typeof(result[element]) === 'undefined') {
            result[element] = 0;
        }
        result[element] += 1;
    });
    return result;
};

exports.charsHistogram = charsHistogram;