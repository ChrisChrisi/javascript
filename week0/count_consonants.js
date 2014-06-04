"use strict";

var allCosonants = "bcdfghjklmnpqrstvwxz".split("");

//haystack.indexOf(needle) >= 0

var count_consonants = function(str){

    var letters = str.toLowerCase().split("");
    var result = 0;

    letters.forEach(function(a){
        if(allCosonants.indexOf(a) >= 0){
            result += 1;
        }
    });
    return result;
};

console.log(count_consonants("JavaScript"));