"use strict";

var makeSTag = function (content, tag) {
    return '<' +tag
    + '>'
    + content
    + '</'
    + tag
    + '>';
};
var addBook = function (book) {
    var content = '<div class="col-xs-4">'
        + makeSTag(book.title, "h3")
        + '<img src="'
        + book.image_url
        + '">'
        + makeSTag("Averege rating: " + book.average_rating, "p")
        + makeSTag("ISBN: " + book.isbn, "p")
        + '<button id ="description-button" class = "btn btn-info" > Read description </button >'
        + '<div id="description" class = "hidden"> '+ book.description+'</div>'
        + '<button class="btn btn-success">Add to Cart</button>'
        + '</div > ';
    return content;
};

var loadBooks = function(allBooks){
    var rowBegin = '<div class="row">';
    var rowEnd = '</div>';
    var allItems = "";
  allBooks.forEach(function(book, i){
      if(i%3 === 0){
          console.log("start: "+ i)
          allItems += rowBegin + addBook(book);
      }
      else if((i+1)%3 === 0) {
          allItems += addBook(book) + rowEnd;
      }
      else{
          allItems += addBook(book);
      }
  });
  return allItems;
};

$(document).ready(function(){
    $.getJSON('http://localhost:3000/books', function (books, textStatus) {
        $("#shelf").append(loadBooks(books));
    });

    $("button").on("click", function(){
        alert("click");
      // $(this).parent().children("#description").addClass("show");
    })
});
