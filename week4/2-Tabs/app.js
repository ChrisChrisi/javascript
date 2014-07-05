$(document).ready(function () {
    $("#tab2").hide();
    $("#tab3").hide();

    $(".tabs > li > a").click(function () {
        $(".active").removeClass("active");
        $(this).addClass("active");
        var tab = $($(this).attr("href"));
        tab.siblings("div").hide();
        tab.show();
        return false;
    });
});
