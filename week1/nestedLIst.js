"use strict";
/**
 * Nested lists

 Alter the ol and ul functions, so they can output nested lists.

 */

var nol = function (items) {
    var result = "<ol>\n";
    items.forEach(function (a) {
        if ( typeof a["children"] != "undefined") {
            result += nol(a["children"]);
        }
        if ( typeof a["label"] != "undefined") {
            result += "<li>" + a['label'] + "</li>\n";
        }
    });
    result += "</ol>\n"
    return result;
};
