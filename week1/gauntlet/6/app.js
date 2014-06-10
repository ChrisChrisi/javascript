"use strict";

var insterHtmlTag = function (content, tag) {
    return "<" + tag + ">" + content + "</" + tag + ">";
};

var moveOptions = function (from, to) {
    var selectedItems = $(from + " option:selected");
    selectedItems.each(function () {
        var input = insterHtmlTag($(this).text(), "option");
        $(this).remove();
        $(to).append(input);
    });
};
$(document).ready(function () {
    $.getJSON('http://localhost:3000/items', function (items, textStatus) {
        items.forEach(function (item) {
            var input = insterHtmlTag(item, "option");
            $("#select-left").append(input);
        });
    });

    $("#to-right").on("click", function () {
        moveOptions("#select-left", "#select-right");
    });

    $("#to-left").on("click", function () {
        moveOptions("#select-right", "#select-left");
    });

});