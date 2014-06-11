/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

var insterHtmlTag = function (content, front, back) {
    return "<" + front + ">" + content + "</" + back + ">";
};

var addToQueue = function (pizzaOrder) {
    var pizza = pizzaOrder.getPizza();
    var input = "<tr id='" + pizzaOrder.getId() + "' class = 'active'>"
        + "<td id='pizzaOrderId'>"
        + pizzaOrder.getId()
        + "</td>"
        + "<td>"
        + pizza.getName()
        + "</td>"
        + "<td>"
        + pizza.getCost()
        + "</td>"
        + "<td id = 'pizzaOrderStatus'>"
        + "waiting"
        + "</td>"
        + "</tr>";
    $("#orders").append(input);
};

$(document).ready(function () {
    var orders = [];
    var currentOrder = false;
    $.getJSON('http://localhost:3000/items', function (items, textStatus) {
        items.forEach(function (item, i) {
            var insert = insterHtmlTag(item["name"] + " ,cost: " + item["cost"] + "$", "option value = '" + i + "'", "option");
            $("#selectPizza").append(insert);
        });

        $("#order-button").on("click", function () {
            id = $("select[id='selectPizza'] option:selected").val();
            var name = items[id]["name"];
            var cost = items[id]["cost"];
            var time = items[id]["time"];

            var newPizza = new Pizza(name, cost, time);
            var newPizzaOrder = new PizzaOrder(newPizza);
            orders.push(newPizzaOrder);
            addToQueue(newPizzaOrder);

        });

    });
    // check if
    setInterval(function () {
        if (orders.length !== 0 && currentOrder === false) {
            currentOrder = orders.shift();
            currentOrder.start();
            var currentRow = $("#orders").children("tr").children("td[id='pizzaOrderId']:contains(" + currentOrder.getId() + ")").parent();
            currentRow.removeClass("active");
            currentRow.addClass("info");
            currentRow.children("td[id='pizzaOrderStatus']").text("preparing");
        }
    }, 1000);

    setInterval(function () {
        checkOrder();
    }, 1000);

    function checkOrder() {
        if (currentOrder && currentOrder.ready()) {
            var id = currentOrder.getId();
            var currentRow = $("#orders").children("tr").children("td[id='pizzaOrderId']:contains(" + id + ")").parent();
            currentRow.removeClass("info");
            currentRow.addClass("success");
            currentRow.children("td[id='pizzaOrderStatus']").text("ready");
            currentOrder = false;
        }
    }

});
