"use strict";

var allVowels = "aeiouy".split("");

//haystack.indexOf(needle) >= 0

var count_vowels = function(str){

    var letters = str.toLowerCase().split("");
    var result = 0;

    letters.forEach(function(a){
        if(allVowels.indexOf(a) >= 0){
            result += 1;
        }
    });
    return result;
};

console.log(count_vowels("JavaScript"));