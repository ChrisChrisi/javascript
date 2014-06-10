"use strict";


Number.prototype.times = function(action){
    if(this < 0 || this%1 !== 0){
        throw new TypeError("Wrong input!");
    }
    var i = 0;
    while(i < this){
       action();
        i += 1;
    }
};

(5).times(function() {
    console.log("OMG!");
});

exports.Number.prototype.times = Number.prototype.times;