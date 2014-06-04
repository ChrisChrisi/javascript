"use strict";

/**
 The function returns true, if all elements in arr are from the given type (which is a string - 'number', 'string', etc.)

 For example:

 only("string", [1,2,3,4]); // false
 only("number", [1,2,3,4]); // tru
 */

var only = function(type, arr) {
return arr.every(function(a){ return typeof  a == type});
};

exports.only = only;
