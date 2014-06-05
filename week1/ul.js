"use strict";
/**
 * var items = [{ "label" : "Item 1"}, { "label" : "Item 2"}]
 var htmlOl = ol(items);

 htmlOl will be:

 <ol>
 <li>Item 1</li>
 <li>Item 2</li>
 </ol>

 */
var ul = function (items) {
    if (items.length < 1) {
        return "";
    }
    var result = "<ul>\n";
    items.forEach(function (a) {
        result += "<li>" + a['label'] + "</li>\n";
    });
    result += "</ul>\n"
    return result;
};

exports.ul = ul;