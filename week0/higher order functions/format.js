"use strict";

/**
 *
 Implement a function, called format(str, dict) which formats the given string, by replacing the placeholders with values from dict.

 For example:

 var formatted = format("{lang} is a very weird {thing}!", {
   "lang" : "JavaScript",
   "thing" : "language"
 });

 console.log(formatted); // JavaScript is a very weird language!
 */

var format = function (string, dict) {
    var words = string.match(/{([^}]+)}/g).map(function (a) {
        return a.replace(/[{}]/g, "")
    });
    words.forEach(function (word) {
        // if something is in brackets, but there's no suck key in the dictionary it cannot be replaced.
        if(typeof dict[word] != 'undefined'){
        string = string.replace('{' + word + '}', dict[word]);
    }
    });

    return string;
};
var dict = {
    "lang" : "JavaScript",
    "thing": "language"
};

var string = "{lang} is a very weird {thing}!";

console.log(format(string, dict));

