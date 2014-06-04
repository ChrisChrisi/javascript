"use strict";

var wordsHistogram = function (str) {
    str = str.toLowerCase();
    str = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    var words = str.split(" ");
var result = {};
    words.forEach(function(element){
        if(typeof(result[element]) === 'undefined'){
            result[element]= 0;        }
        result[element] += 1;
    });

    return result;
};

var string = "A function is a function with, a very: functional function..!";

console.log(wordsHistogram(string));
