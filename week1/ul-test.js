"use strict";

var ul = require("./ul").ul;

var items = [
    {"label": "Item 1"},
    {"label": "Item 2"}
]

var result = "<ul>\n" +
    "<li>Item 1</li>\n" +
    "<li>Item 2</li>\n" +
    "</ul>\n"

exports.testUlOne = function (test) {
    test.equal(result, ul(items));
    test.done();
};

exports.testUlTwo = function (test) {
    test.equal("", ul([]));
    test.done();
};