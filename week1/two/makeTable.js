"use strict";

var students = [
    {
        "id"    : 1,
        "name"  : "Daniel Taskoff",
        "course": "Frontend JavaScript"
    },
    {
        "id"    : 2,
        "name"  : "Elena Jeleva",
        "course": "Programming 101"
    },
    {
        "id"    : 3,
        "name"  : "Luboslava Dimitrova",
        "course": "Frontend JavaScript"
    },
    {
        "id"    : 4,
        "name"  : "Anton Antonov",
        "course": "Core Java"
    },
    {
        "id"    : 5,
        "name"  : "Nikola Dichev",
        "course": "Core Java"
    }
];

var makeTable = function (info) {
    if (!Array.isArray(info)) {
        throw new TypeError("The argument should be array");
    }
    if ((info.length < 1)) {
        return "";
    }
    var keys = Object.keys(info[0]);

    var result = '<table class="table">\n' +
        '<thead>\n' +
        '<tr>\n';
    keys.forEach(function (key) {
        result += '<th>' +
        (key.charAt(0).toUpperCase() + key.slice(1)) +
        '</th>\n';
    });

    result += '</tr>\n' +
    '</thead>\n' +
    '<tbody>\n';

    info.forEach(function (elem) {
        result += '<tr>\n';
        keys.forEach(function (key) {
            result += '<td>' + elem[key] + '</td>\n';
        });
        result += '</tr>\n';
    });

    result += '</tbody>\n' +
    '</table>\n';
    return result;
};

//console.log(makeTable(students));