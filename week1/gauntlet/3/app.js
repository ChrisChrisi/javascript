$(document).ready(function() {
    $("#search-button").on("click", function(){
        var inputURL = $("#search-input").val();
        if(!(/^http:\/\/.+\.(gif|png|jpg|jpeg)/i.test(inputURL))){
            alert("Wrong input!");
        }
        else{
        var newImg = '<img class="col-md-6" src="'+ inputURL+ '">';
            $(".images").append(newImg);
        }
    });

    $(".images").on("click",'img', function(){
        $(this).remove("img");
    });
});
