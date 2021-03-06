"use strict";

var makeTable = function (info, selected) {
    if (!Array.isArray(info)) {
        throw new TypeError("The argument should be array");
    }
    if ((info.length < 1)) {
        return "";
    }
    var keys = Object.keys(info[0]);

    var result = '<table class="table table-bordered">\n' +
        '<thead>\n' +
        '<tr>\n';
    keys.forEach(function (key, i) {
        result += '<th class="col-md-3">' +
        (key.charAt(0).toUpperCase() + key.slice(1)) +
        '</th>\n';
    });

    result += '</tr>\n' +
    '</thead>\n' +
    '<tbody>\n';

    info.forEach(function (elem,i) {
        var label;
        if(selected && selected.indexOf(i) >= 0)
        {
           label = "success";

        }
        else {label = ""};
        result += '<tr class='+label+'>\n';
        keys.forEach(function (key) {
            result += '<td class="col-md-3">' + elem[key] + '</td>\n';
        });
        result += '</tr>\n';
    });

    result += '</tbody>\n' +
    '</table>\n';
    return '<div class="row col-xs-4 ">' + result + '</div>';
};

exports.makeTable = makeTable;