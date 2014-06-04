"use strict";

var charsHistogram = function(str){
    str = str.toLowerCase();
    str = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\s\{\}\[\]\\\/]/gi, '');
    //var words = str.split(" ");
    var words = str.split("");
    var result = {};
    words.forEach(function(element){
        if(typeof(result[element]) === 'undefined'){
            result[element]= 0;        }
        result[element] += 1;
    });
    return result;
};


var string = "Count the characters in this very profound sentence";
console.log(charsHistogram(string));