var groceries = [{
    type: "fruit",
    name: "banana",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/166px-Banana-Single.jpg"
}, {
    type: "fruit",
    name: "apple",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/160px-Red_Apple.jpg"
}, {
    type: "fruit",
    name: "grape",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/217px-Table_grapes_on_white.jpg"
}, {
    type: "fruit",
    name: "watermelon",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg/96px-Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg"
}, {
    type: "vegetable",
    name: "potato",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/220px-Patates.jpg"
}, {
    type: "vegetable",
    name: "carrot",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/13-08-31-wien-redaktionstreffen-EuT-by-Bi-frie-037.jpg/218px-13-08-31-wien-redaktionstreffen-EuT-by-Bi-frie-037.jpg"
}, {
    type: "vegetable",
    name: "turnip",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Turnip_2622027.jpg/218px-Turnip_2622027.jpg"
}, {
    type: "vegetable",
    name: "lettuce",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Iceberg_lettuce_in_SB.jpg/320px-Iceberg_lettuce_in_SB.jpg"
}];

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
    // sort the items by type
  var sortedItems=  groupBy(function(item) {
      return item.type;
    }, groceries);

    var result = "";
    var types = Object.keys(sortedItems);
    types.forEach(function(type){
       var group =  sortedItems[type];
        var content = htmlGenerator.tag({
                        tagName:"h2",
                        data: type
                    });
        group.forEach(function(elem){
           var elemRes =  htmlGenerator.tag({
                tagName:"h3",
                data: elem.name
            });
            elemRes +=  "<img src='"+ elem.image +"'>";
            elemRes =  htmlGenerator.tag({tagName: "div", data:  elemRes, attributes: [{ key: "class", value: "col-md-3"
                             }]});
            content += elemRes;
        });
        result +=   htmlGenerator.tag({
                 tagName: "div",
                 data:    content,
                 attributes: [{
                     key: "class",
                     value: type + " row"
                 }]
             });
    });

    $("#content").append(result);
});
