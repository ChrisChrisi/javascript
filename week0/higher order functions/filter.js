"use strict";

/**
 *
 Let's filter

 Implement a basic filter function with the following signature: filter(pred, arr) where pred is a function, that returns true or false (A predicate)

 */
var filter = function(pred,arr){
   var result = [];
    arr.forEach(function(a){
        if(pred(a)){
            result.push(a);
        }
    });
    return result;
};


var users = [{
    "name" : "Rado",
    "score" : 50
}, {
    "name" : "Ivan",
    "score" : 67
}, {
    "name" : "Vlado",
    "score" : 30
}];

// filter all users with score bigger than 40

var result = filter(function(user) {
    return user.score > 40;
}, users);

console.log(result);

