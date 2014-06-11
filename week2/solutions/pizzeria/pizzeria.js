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
    if (currentTime - this.getTimeOfStart() >= timeToMake) {
        return true;
    }
    else {
        return false
    }
};
