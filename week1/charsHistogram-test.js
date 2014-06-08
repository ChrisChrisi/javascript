"use strict";

var charsHistogram = require("./charsHistogram").charsHistogram;

exports.testCharsHistogramOne = function(test){
    test.deepEqual({},charsHistogram(""));
    test.done();
};

var inputString = "Count the characters in this very profound sentence";
var result = { c: 4,
  o: 3,
  u: 2,
  n: 5,
  t: 5,
  h: 3,
  e: 6,
  a: 2,
  r: 4,
  s: 3,
  i: 2,
  v: 1,
  y: 1,
  p: 1,
  f: 1,
  d: 1 }
exports.testCharsHistogramTwo = function(test){
    test.deepEqual(result,charsHistogram(inputString));
    test.done();
};

exports.testCharsHistogramThrow = function(test){
    test.throws(function(){
        charsHistogram([1,2,3]);
    });
    test.done();
};
