"use strict";

var realQueue = (function () {
    var _private = {
        head   : 0,
        tail   : 0,
        storage: {}
    };
    return {
        push      : function (elem) {
            _private.storage[_private.tail] = elem;
            _private.tail += 1;
        },
        pop       : function () {
            if (!this.isEmpty()) {
                var elem = _private.storage[_private.head]
                delete _private.storage[_private.head];
                _private.head += 1;
                return elem;
            }
        },
        getStorage: function () {
            return _private.storage;
        },
        isEmpty   : function () {
            return Object.keys(_private.storage).length === 0;
        }
    }
}() );

/**
 *  An Event Queue

 Create a single object, that behaves like an event queue! We can attach custom events with callbacks to them and also trigger those events.

 The object should have the following public methods:

 .on(eventName, callback) - adds the given callback for the given eventName
 .remove(eventName) - removes all callbacks for the given eventName
 .trigger(eventName) - fires the given eventName which calls all callbacks for that event

 */

var queue = (function () {
    var storage = {};

    var on = function (eventName, f) {
        if (!storage[eventName]) {
            storage[eventName] = [];
        }
        storage[eventName].push(f);
    };
    var remove = function (eventName) {
        if (storage[eventName]) {
            delete storage[eventName];
        }
    };
    var trigger = function (eventName) {
        var callbacks = storage[eventName] || [];
        callbacks.forEach(function (callback) {
            callback();
        });
    };
    return {
        on     : on,
        remove : remove,
        trigger: trigger
    }
}());

queue.on("PANIC_EVENT", function () {
    console.log("PANIC_EVENT HAPPENED!")
});

queue.on("PANIC_EVENT", function () {
    console.log("PANIC_EVENT HAPPENED AGAIN!");
});

queue.trigger("PANIC_EVENT");
