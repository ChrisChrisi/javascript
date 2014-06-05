"use strict";

var ol = require("./ol").ol;

var items = [
    {"label": "Item 1"},
    {"label": "Item 2"}
]

var result = "<ol>\n" +
    "<li>Item 1</li>\n" +
    "<li>Item 2</li>\n" +
    "</ol>\n"

exports.testOlOne = function (test) {
    test.equal(result, ol(items));
    test.done();
};

exports.testOlTwo = function (test) {
    test.equal("", ol([]));
    test.done();
};