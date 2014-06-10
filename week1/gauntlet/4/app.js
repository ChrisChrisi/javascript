/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

"use strict";
var insterHtmlTag = function (content, tag) {
    return "<" + tag + ">" + content + "</" + tag + ">";
};

$(document).ready(function () {
    // get the students list
    $.getJSON('http://localhost:3000/students', function (students, textStatus) {

        //sort the students by course
        var sortedStudents = groupBy(function (student) {
            return student.course;
        }, students);
        //get the courses
        var courses = Object.keys(sortedStudents);
        //append the courses to the select
        courses.forEach(function (course) {
            var insert = insterHtmlTag(course, "option");
            $("select[name='course-pick']").append(insert);
        });

        //when a course is picket the students names from this course are inserted in the student-pick select
        $("select[name='course-pick']").children("option").on("click", function () {
            $("select[name='student-pick']").empty();
            var course = $(this).val();
            var studentsNames = [];
            sortedStudents[course].forEach(function (student) {
                studentsNames.push(student["name"]);
            });
            if (studentsNames) {
                studentsNames.forEach(function (name) {
                    var insert = insterHtmlTag(name, "option");
                    $("select[name='student-pick']").append(insert);
                });
            }
        });

        $("select[name='student-pick']").on("click", "option", function () {
            var name = $(this).val();
            var selectedStudent;
            students.some(function (a, i) {
                if (a['name'] === name && a['course'] === $("select[name='course-pick'] option:selected").text()) {
                    selectedStudent = a;
                    return true;
                }
            });
            if (selectedStudent) {
                $("#student-info").empty();
                var text = "GitHub for " + selectedStudent["name"] + " is " + selectedStudent["github"] + ".";
                $("#student-info").append(insterHtmlTag(text, "h2"));
            }
        });
    });
});