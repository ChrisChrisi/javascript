"use strict";

var ol = function(items) {
    var result = "<ol>\n";
    items.forEach(function(a){
        result += "<li>"+ a['label']+ "</li>\n";
    });
    result += "</ol>\n"
    return result;
};

var items = [{ "label" : "Item 1"}, { "label" : "Item 2"}]
var htmlUl = ol(items);
console.log(htmlUl);
