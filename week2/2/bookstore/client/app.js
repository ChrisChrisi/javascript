"use strict";
var addBook = function (book) {
    var template = $('#bookTemplate').html();
    // complie template and bind context
    return _.template(template)({
        book: book
    });
};

var loadBooks = function (allBooks) {
    var rowBegin = '<div class="row">';
    var rowEnd = '</div>';
    var allItems = "";
    allBooks.forEach(function (book, i) {
        book.id = i;
        if (i % 3 === 0) {
            allItems += rowBegin + addBook(book);
        }
        else if ((i + 1) % 3 === 0) {
            allItems += addBook(book) + rowEnd;
        }
        else {
            allItems += addBook(book);
        }
    });
    return allItems;
};



$(document).ready(function () {
    $.getJSON('http://localhost:3000/books', function (books, textStatus) {
        $("#allBooks").append(loadBooks(books));


    $(".shelf").on("click", '.description-button', function () {
       $(".modal-body").empty();
        var description = $(this).parent().children("#description");
        var added = description.clone().appendTo(".modal-body");
        added.removeClass("hidden");

    });

    $("#allBooks").on("click", ".cart-button", function () {
        var book = $(this).parent();

        var elem = book.clone().appendTo("#cart-content");
        elem.children(".cart-button").addClass("btn-warning left").text("remove");
        elem.children(".description-button").remove();
        var oldVal =  parseInt($("#page-num").text() );
        $("#page-num").text(oldVal + books[parseInt(elem.attr('id'))].num_pages);
    });


    $("#cart-content").on("click", ".cart-button", function () {
        var oldVal =  parseInt($("#page-num").text() );
        $("#page-num").text(oldVal -  books[parseInt( $(this).parent().attr('id'))].num_pages);
        $(this).parent().remove();
    });
    });
});
