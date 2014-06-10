/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

"use strict";
var generateRandomNum = function (length) {
    var numbers = length;
    var r = '';
    for (var i = 0; i < numbers; i++) {
        r += parseInt((Math.random() * 10), 10) + '';
    }
    return r;
};

var reloadNumber = function (section, numLength) {
    var newNumber = generateRandomNum(numLength);
    $(section)
        .empty()
        .append(newNumber);
};

$(document).ready(function () {
    reloadNumber("#num", 2);

    $(".digit").on("click", function () {
        var selectedDigit = $(this).text();
        $("#entered-num").append(selectedDigit);

        // if the user entered the right sequence a success alert is given and the game is restarted
        if ($("#entered-num").text() === $("#num").text()) {
            alert("Congrats! This is the right number.");
            $("#entered-num").text('');
            reloadNumber("#num", 2);
        }
    });

    $("#back").on("click", function () {
        var input = $("#entered-num").text();
        input = input.slice(0, (input.length - 1));
        $("#entered-num").text(input);
    });

});
