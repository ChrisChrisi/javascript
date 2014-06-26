var tableGen = function (columns, items) {
    var template = $("#tableTemplate").html();

    return _.template(template, {columns: columns, items: items})

};
var addOptions = function (groups, selectName) {
    var template = "<% (groups).forEach(function(group){%><option><%= group %></option> <%}); %>"
    var result = _.template(template, {groups: groups});
    $("select[name='" + selectName + "']").empty();
    $("select[name='" + selectName + "']").append(result);
};

var compareAv = function (a, b) {
    if (a.available === "true" && b.available === "false") {
        return -1;
    }
    if (a.available === "false" && b.available === "true") {
        return 1;
    }
    return 0;
};

var compareNames = function (a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
};

var compareCourses = function (a, b) {
    if((typeof a.courses[0] !== "undefined" )&& (typeof b.courses[0] !== "undefined" )){
    if (a.courses[0].name < b.courses[0].name) {
        return -1;
    }
    if (a.courses[0].name > b.courses[0].name) {
        return 1;
    }}
    else{
        if((typeof a.courses[0] === "undefined" )&& (typeof b.courses[0] !== "undefined" )){
            return - 1;
        }
        if((typeof b.courses[0] === "undefined" )&& (typeof a.courses[0] !== "undefined" )){
            return 1;
        }
    }
    return 0;
};

var multiCompare = function (a, b) {
        if (a.available === b.available) {
            if ((typeof a.courses[0] !== "undefined" )&& (typeof b.courses[0] !== "undefined" ) && (a.courses[0].name === b.courses[0].name)) {
                compareNames(a, b);
            }
            compareCourses(a, b);
        }
        compareAv(a, b);
    };

$(document).ready(function () {
    $.getJSON('https://hackbulgaria.com/api/students/', function (students) {
        students = students.sort(compareNames);

        var filterTable = function () {
            var course = $("select[name='course-pick']").find(":selected").val();
            var group = $("select[name='group-pick']").find(":selected").val();
            var selectedStudents = [];
            if (course === "All courses") {
                if (group === "All groups") {
                    selectedStudents = students;
                } else {
                    group = parseInt(group);
                    selectedStudents = sortedStudentsByGroup[group];
                }
            }
            else {

                var selected = sortedStudentsByCourse[course];
                if (group === "All groups") {
                    selectedStudents = selected;
                }
                else {
                    group = parseInt(group);
                    var sortByGroup = groupBy(function (student) {
                        var result = [];
                        student.courses.forEach(function (course) {
                            result.push(course.group)
                        });
                        return result;

                    }, selected);
                    selectedStudents = sortByGroup[group];
                }
            }

            $(".studentsTable").empty();
            $(".studentsTable").append(tableGen(columns, selectedStudents));
        };

        var columns = ["Name", "GitHub", "Course/s", "Available"];

        $(".studentsTable").empty();
        $(".studentsTable").append(tableGen(columns, students));

        var sortedStudentsByCourse = groupBy(function (student) {
            var result = [];
            student.courses.forEach(function (course) {
                result.push(course.name)
            });
            return result;

        }, students);

        var courses = ["All courses"];
        courses = courses.concat(Object.keys(sortedStudentsByCourse));
        addOptions(courses, "course-pick");

        var sortedStudentsByGroup = groupBy(function (student) {
            var result = [];
            student.courses.forEach(function (course) {
                result.push(course.group)
            });
            return result;

        }, students);

        var groups = ["All groups"];
        groups = groups.concat(Object.keys(sortedStudentsByGroup));
        addOptions(groups, "group-pick");

        $("select[name='group-pick']").children("option").on("click", function () {
            filterTable();
        });

        $("select[name='course-pick']").children("option").on("click", function () {
            filterTable();
        });
    });
});
