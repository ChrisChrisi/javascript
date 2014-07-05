$(document).ready(function($) {

    var allPanels = $('.accordion > dd').hide();
    allPanels.first().show();

    $('.accordion > dt > a').on("click",function(event) {
        //allPanels.slideUp();
        var current = $(this).parent().next();
        current.siblings("dd").slideUp();
        $(this).parent().next().slideToggle();
        event.preventDefault();
    });

});

