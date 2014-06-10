/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

var addToQueue = function (pizzaOrder) {
    var button1 = "<button class='btn btn-success'>Start</button>";
    var button2 = "<button class='btn btn-danger'>Discard</button>"
    var pizza = pizzaOrder.getPizza();
    var input = "<tr id='"+pizzaOrder.getId()+"'>"
        + "<td>"
        + pizzaOrder.getId()
        + "</td>"
        + "<td>"
        + pizza.getName()
        + "</td>"
        + "<td>"
        + pizza.getCost()
        + "</td>"
        + "<td>"
        + button1
        + button2
    +"</td>"
    + "</tr>";
    console.log(input)
    $("#orders").append(input);
}

$(document).ready(function () {
    $("#order-button").on("click", function () {
        var name = $("#name-input").val();
        var cost = $("#cost-input").val();
        var time = $("#time-input").val();

        var newPizza = new Pizza(name, cost, time);
        console.log(newPizza);
        var newPizzaOrder = new PizzaOrder(newPizza);
        addToQueue(newPizzaOrder);
    });

    $("button").on("click",function(){
        alert("clicked here");
    });
});
