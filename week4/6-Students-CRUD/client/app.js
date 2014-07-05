var tableGen = function (columns, items) {
    var template = $("#tableTemplate").html();

    return _.template(template, {columns: columns, items: items})

};

var listStudents = function () {
    $(".createEdit").hide();

    $.getJSON('http://localhost:3030/students', function (students) {
        console.log(students[0]);
        var columns = ["Name", "Faculty number", "Course/s", "Actions"];

        $(".studentsTable").empty();
        $(".studentsTable").append(tableGen(columns, students));
        $(".studentsTable").show();


    });
};


$(document).ready(function () {
    $(".studentsTable").hide();
    $(".createEdit").hide();
    $("#makeList").on("click", function () {
        listStudents();
    });


    $(".studentsTable").on("click", ".deleteBtn", function () {
        var fn = $(this).parent().parent().attr("id");
        $.ajax({
            url: "http://localhost:3030/student/" + fn,
            type: "DELETE",
            contentType: "application/json",
            dataType: "json"
        }).done(function (data) {
            listStudents();
            alert("Delete success!");
        });
    });

    $("#addUsr").on("click", function () {
        $(".createEdit #fn").val("");
        $(".createEdit #name").val("");
        $(".createEdit #courses").val("");
        $(".createEdit").show();
    });

    $("#submitInfo").on("click", function () {
        var fn = $("#fn").val();
        var name = $("#name").val();
        var courses = $("#courses").val();
        if (fn.length < 3 || name.length < 3 || courses.length < 3) {
            alert("Not all fields have correct values!");
        }
        else {
            courses = courses.split("; ");


            $.ajax({
                url: "http://localhost:3030/student/",
                type: "POST",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify({
                    name: name,
                    courses: courses,
                    facultyNumber: fn
                })
            }).done(function (data) {
                $(".createEdit").hide();
                listStudents();
                alert("Save success!");
            });

        }

    });

    $(".studentsTable").on("click", ".updateBtn", function () {
        $(".createEdit #fn").val($(this).parent().siblings("td").first().next().text());
        $(".createEdit #name").val($(this).parent().siblings("td").first().text());
        $(".createEdit #courses").val($(this).parent().siblings("td").first().next().next().text());
        $(".createEdit").show();
    });


});
