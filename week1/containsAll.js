"use strict";

var containsAll = function(elements, arr) {
    return elements.every(function(a){ return arr.indexOf(a) >= 0; });
};

exports.containsALL = containsAll;