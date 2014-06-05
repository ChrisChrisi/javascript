"use strict";
/**
 * Nested lists

 Alter the ol and ul functions, so they can output nested lists.

 */

var nestedLIst = function (items, listType) {
    if (listType !== "ol" && listType !== "ul") {
        throw new TypeError("Wrong list type!");
    }
    var result = "<" + listType + ">\n";
    items.forEach(function (a) {
        if (typeof a["children"] != "undefined") {
            result += nestedLIst(a["children"], listType);
        }
        if (typeof a["label"] != "undefined") {
            result += "<li>" + a['label'] + "</li>\n";
        }
    });
    result += "</" + listType + ">\n";
    return result;
};
var items = [
    {"label": "Item 1"},
    {
        "label": "Item 2", "children": [
        {
            "label": "Level 2 of Item 2"
        },
        {
            "label": "Another level 2"
        }
    ]
    }
];
exports.nestedLIst = nestedLIst;