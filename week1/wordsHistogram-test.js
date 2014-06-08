"use strict";

var wordsHistogram = require("./wordsHistogram").wordsHistogram;

var inputStr = "A function is a function with a very functional function!";


var result = {
    "a" : 3,
    "function" : 3,
    "is" : 1,
    "with" : 1,
    "very" : 1,
    "functional" : 1
};

exports.testWordsHistogramThrow = function(test){
    test.throws(function(){
        wordsHistogram([1,2,3]);
    });
    test.done();
};

exports.testWordsHistogramOne = function(test){
    test.deepEqual(result, wordsHistogram(inputStr));
    test.done();
};

exports.testWordsHistogramTwo = function(test){
    test.deepEqual({}, wordsHistogram(""));
    test.done();
};
