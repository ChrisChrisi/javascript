"use strict";
$(document).ready(function () {
    $.getJSON('http://localhost:3000/students', function (students, textStatus) {

        var table = makeTable(students);

        $("#b-div").append(table);
    });
//group by course
    $("#group-btn").on("click", function () {
        $("#b-div").empty();
        $.getJSON('http://localhost:3000/students', function (students, textStatus) {

            var sorted = groupBy(function (student) {
                return student.course;
            }, students);
            var keys = Object.keys(sorted);
            keys.forEach(function (key) {
                var newTable = makeTable(sorted[key]);
                $("#b-div").append(newTable);
            });

        });
    });
    //return the default table
    $("#def-group-btn").on("click", function () {
        $("#b-div").empty();
        $.getJSON('http://localhost:3000/students', function (students, textStatus) {
            var table = makeTable(students);
            $("#b-div").append(table);
        });
    });

    $("#search-btn").on("click", function () {

        $("#b-div").empty();
        var searched = $("#search-box").val();
        $.getJSON('http://localhost:3000/students', function (students, textStatus) {

            var result = [];
            students.forEach(function (a, i) {
                if (a['name'] === searched) {
                    result.push(i);
                }
            });
            var table = makeTable(students,result);

            $("#b-div").append(table);

        });

    });
});
