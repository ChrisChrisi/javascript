"use strict";

function Pizza(name, cost, timeToMake) {
    if (!(this instanceof Pizza)) {
        return new Pizza(name, cost, timeToMake);
    }
    this.getName = function () {
        return name;
    };

    this.getCost = function () {
        return cost;
    };

    this.getTimeToMake = function () {
        return timeToMake;
    };

    this.setName = function (newName) {
        name = newName;
    };

    this.setCost = function (newCost) {
        cost = newCost;
    };

    this.setTimeToMake = function (newTime) {
        timeToMake = newTime;
    };

};

/**
 Create a class, called PizzaOrder which takes a Pizza as a constructor argument.

 Each PizzaOrder should have its own unique id! This is how we identify the different orders.

 The unique id of PizzaOrder should be fetched by a getId() method.

 PizzaOrder should have the following methods:

 start - starts making the Pizza. timeToMake is important here ;)
 ready = function(callback) { ... } - takes a callback function, which is fired when the Pizza is ready - this when timeToMake time passes. The callback should be fired with the Pizza instance as an argument, followed by the PizzaOrder instance!
 */
var lastId = 0;
function PizzaOrder(pizza) {
    if (!(this instanceof PizzaOrder)) {
        return new PizzaOrder(pizza);
    }
    if (!(pizza instanceof Pizza)) {
        throw new TypeError("The argument should be Point object!");
    }
    var id = lastId;
    lastId += 1;
    var timeOfStart = false;
    this.getTimeOfStart = function () {
        return timeOfStart;
    };

    this.setTimeOfStart = function (value) {
        timeOfStart = value;
    };

    this.getId = function () {
        return id;
    };

    this.getPizza = function () {
        return pizza;
    };

};

PizzaOrder.prototype.start = function () {
    this.setTimeOfStart(parseInt(new Date().getTime() / 1000));
};

PizzaOrder.prototype.ready = function () {
    var timeToMake = this.getPizza().getTimeToMake();

    var currentTime = parseInt(new Date().getTime() / 1000);
    console.log(timeToMake);
    console.log(currentTime - this.getTimeOfStart());
    if (currentTime - this.getTimeOfStart() >= timeToMake) {
        return true;
    }
    else {
        return false
    }
};
