var makeList = function(listItems){
    var template = "<ul><%_(items).forEach(function(item){ %><li> <%= item %></li> <%});%></ul>";
    return _.template(template, {items: listItems});
};

$(document).ready(function(){
    var items = ["one", "two", "three"];
    $("#content").append(makeList(items));
});
