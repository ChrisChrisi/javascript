"use strict";

var ol = function(items) {
    if(items.length < 1){
        return "";
    }
    var result = "<ol>\n";
    items.forEach(function(a){
        result += "<li>"+ a['label']+ "</li>\n";
    });
    result += "</ol>\n"
    return result;
};

exports.ol = ol;
