/**
 * var htmlGenerator = {
     link : function(data) { ... },
     paragraph: function(data) { ... },
     list: function(data) { ... },
     tag: function(data) { ... }
 };
 */
var listGen = function(listItems){
    var template = "<ul><%_(items).forEach(function(item){ %><li> <%= item %></li> <%});%></ul>";
    return _.template(template, {items: listItems});
};

var linkGen = function(link){
    var template = "<a href='<%= link.href %>'><%= link.name %></a>";
    return _.template(template, {link: link});
};

var paragraphGen = function(content){
    var template = "<p><%= content %></p>";

    return _.template(template, {content: content});
};


var tagGen = function(tag){
    var template = "<<%= tag.tagName %> " +
        "<%_(tag.attributes).forEach(" +
            "function(attr){%>" +
        "<%= attr.key %>='<%= attr.value%>' " +
            "<%});%>>" +
        "<%= tag.data %>" +
        "</<%= tag.tagName %>>";
    return _.template(template, {tag: tag});
};

var htmlGenerator = {
     link : linkGen,
     paragraph: paragraphGen,
     list: listGen,
     tag: tagGen};

$(document).ready(function(){
    var link = {"href":"https://google.com", "name": "click"};
    $("#content").append(htmlGenerator.link(link));

    var text = "This is paragraph.";
    $("#content").append(htmlGenerator.paragraph(text));

    var list = ["item 1", "item 2", "item 3"];

    $("#content").append( htmlGenerator.list(list));

    var element =  htmlGenerator.tag({
         tagName: "div",
         data:  htmlGenerator.tag({
             tagName: "h1",
             data: "Hello!"
         }),
         attributes: [{
             key: "class",
             value: "container"
         }, {
             key: "id",
             value: "main-container"
         }]
     });

    $("#content").append(element);
});
