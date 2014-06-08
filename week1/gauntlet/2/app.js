$(document).ready(function () {
    var pClasses = ["first", "second", "third"];
    $("#toggleButton").on("click",function(){
        $(".highlight").removeClass("highlight");
        var currentElem = pClasses.shift();
        pClasses.push(currentElem);
        $("."+currentElem).addClass("highlight");

    });
});
