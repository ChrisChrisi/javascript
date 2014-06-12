"use strict";

var queue = {
    head   : 0,
    tail   : 0,
    storage: {}
};

var basePerson = (function () {
    var _private = {
        personName: ""
    };

    return {
        setName: function (name) {
            _private.personName = name;
        },
        getName: function () {
            return _private.personName;
        }
    };
}() );

var makeQueue = function(queueName, comment){

  // You can use object literal notation for `instance` (instead of dot notation),
  // but then we have to use `this` and we lose the privacy of closure scope
  // (e.g., `storage` is no longer private), so this kind of sucks.
  var instance = {
    name: queueName,
    annotation: comment,
    head: 0,
    tail: 0,
    storage: {}
  };

  // The _.extend() function is provided by the Underscore.js library
  _.extend(instance, sharedQueueMethods);

  return instance;
};

// The object below stores methods that could be shared with other classes
var sharedQueueMethods = {
  enqueue: function(data){
    this.storage[this.tail] = data;
    this.tail++;
    // The tail points to the next EMPTY "spot" for data to be stored
    // it does NOT point to the last OCCUPIED "spot" in the storage
  },
  dequeue: function(){
    if(this.head <= this.tail){  // Check the queue's size
      var data = this.storage[this.head];

      // Deleting is even more important for queues than for stacks
      // (memory leaks are a bigger threat for queues)
      delete this.storage[this.head];
      this.head++;
      return data;
    }
  },
  size: function(){
    return this.tail - this.head;
  }
};

var queue = {
    head:0,
    tail:0,
    storage:{},
    push: function(elem){
        this.storage[this.tail] = elem;
        this.tail+=1;
    },
    pop: function(){
        if(!this.isEmpty()){
            var elem = this.storage[this.head]
            delete this.storage[this.head];
            this.head+=1;
            return elem;
        }
    },
    isEmpty: function()
    {return Object.keys(this.storage).length === 0;}
};

function eventQueue(){

};
