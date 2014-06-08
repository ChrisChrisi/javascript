"use strict";

var pluck = require("./pluck").pluck;

var students = [{
  "name" : "Daniel Taskoff",
  "course" : "Frontend JavaScript"
}, {
  "name" : "Elena Jeleva",
  "course" : "Programming 101"
}, {
  "name" : "Luboslava Dimitrova",
  "course" : "Frontend JavaScript"
}, {
  "name" : "Anton Antonov",
  "course" : "Core Java"
}, {
  "name" : "Nikola Dichev",
  "course" : "Core Java"
}];

//pluck("name", students);
var result = ["Daniel Taskoff", "Elena Jeleva", "Luboslava Dimitrova", "Anton Antonov", "Nikola Dichev"]

exports.testPluckOne = function(test){
    test.deepEqual(result, pluck("name", students));
    test.done();
};

exports.testPluckTwo = function(test){
    test.deepEqual(['','','','',''], pluck("score", students));
    test.done();
};