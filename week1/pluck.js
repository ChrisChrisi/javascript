"use strict";

var pluck = function (property, arr) {
    return arr.map(function (a) {
        if (a.hasOwnProperty(property)) {
            return a[property];
        }else{
            return "";
        }
    });
};

exports.pluck = pluck;