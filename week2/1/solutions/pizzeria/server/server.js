"use strict";
// trying to start this file but something's not working?
// try npm install first

var express = require('express');
var app = express();

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

var items = [
    {
        name: "Margarita",
        cost: 10,
        time: 20
    },
    {
        name: "Napoli",
        cost: 8,
        time: 8
    },
    {
        name: "Pepperoni",
        cost: 13.50,
        time: 13
    } ,
    {
        name: "Calzone",
        cost: 11,
        time: 9
    },
    {
        name: "Vegetariana",
        cost: 11,
        time: 14
    }
]

app.get('/items', function (req, res) {
    res.json(items);
});

var server = app.listen(3000, function () {
    console.log('Listening on port %d', server.address().port);
});
