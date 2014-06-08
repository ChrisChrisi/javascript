"use strict";

var allConsonants = "bcdfghjklmnpqrstvwxz";

var count_consonants = function(str){

    var letters = str.toLowerCase().split("");
    var result = 0;

    letters.forEach(function(a){
        if(allConsonants.indexOf(a) >= 0){
            result += 1;
        }
    });
    return result;
};

console.log(count_consonants("JavaScript"));