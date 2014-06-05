"use strict";

var nestedLIst = require("./nestedLIst").nestedLIst;

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

var result = "<ol>\n" +
    "<li>Item 1</li>\n" +
    "<ol>\n" +
    "<li>Level 2 of Item 2</li>\n" +
    "<li>Another level 2</li>\n" +
    "</ol>\n" +
    "<li>Item 2</li>\n" +
    "</ol>\n";

exports.testNestedLIstOne = function (test) {
    test.throws(function () {
        nestedLIst(items, "blabla")
    });
    test.done();
};

exports.testNestedLIstTwo = function (test) {
    test.equal(result, nestedLIst(items, "ol"));
    test.done();
};
