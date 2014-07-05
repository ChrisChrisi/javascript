var tableGen = function (columns, items) {
    var template = $("#tableTemplate").html();

    return _.template(template, {columns: columns, items: items})
};

var loadCourses = function(items){
    var template = $("#tableGroups").html();
    return _.template(template, {items: items})
}

var listStudents = function () {
    $(".createEdit").hide();

    $.getJSON('http://localhost:3030/students', function (students) {
        var columns = ["Name", "Faculty number", "Course/s", "Actions"];

        $(".studentsTable").empty();
        $(".studentsTable").append(tableGen(columns, students));
        $(".studentsTable").show();


    });
};


$(document).ready(function () {
    var coursesList = ["Algebra", "Geometry", "DIS", "DAA"];
    $(".addCourse").hide();
    listStudents();
    $(".createEdit").hide();

    $("#makeList").on("click", function () {
        $(".createEdit").hide();
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
        });
    });

    $("#addUsr").on("click", function () {
        $(".studentsTable").hide();

        $('.crs:checkbox:checked').map(function() {
            this.checked = false;
        });
        $("#coursesList").empty()
        $("#coursesList").append(loadCourses(coursesList));
        $(".createEdit #fn").val("");
        $(".createEdit #name").val("");
        $(".createEdit #courses").val("");
        $(".createEdit").show();
    });

    $("#submitInfo").on("click", function () {
        var fn = $("#fn").val();
        console.log(typeof fn);
        var name = $("#name").val();
        if (fn.length < 3 || name.length < 3) {
            alert("Not all fields have correct values!");
        }
        else {
            var courses = $('.crs:checkbox:checked').map(function() {
                return this.value;
            }).get();


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

        var fn = $(this).parent().parent().attr("id");
        $.getJSON('http://localhost:3030/students', function (students) {
            var student = students.filter(function( obj ) {
                return obj.facultyNumber === fn;
            })[0];

        $(".createEdit #fn").val(student.facultyNumber);
        $(".createEdit #name").val(student.name);
        $("#coursesList").empty()
        $("#coursesList").append(loadCourses(coursesList));

        $('.crs').map(function() {
            if( student.courses.indexOf($(this).val()) > -1)
            this.checked = true;
        });
        $(".createEdit").show();
        });
    });

    $("#coursesAdd").on("click", function(event){
        $(".addCourse").show();
        event.preventDefault();
    });

    $("#submitCourse").on("click", function(){
        coursesList.push( $("#courseName").val());
        $("#courseName").val("");
        console.log(coursesList);
        $(".addCourse").hide();
    });

});
