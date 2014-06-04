"use strict";

var is_prime = function(n) {
    if(n === 2){
        return true;
    }
    if (n === 1){
        return false;
    }
    var arr = Array.apply(null, {length: (Math.abs(n)+1)}).map(Number.call, Number);
    arr = arr.slice(2);

    if(arr.filter(function(a){return (Math.abs(n) % a === 0); }).reduce(function(a,b){ return a + b;}) === Math.abs(n)){
        return true;
    }
    else {
        return false;
    }
};


var prime_number_of_divisors = function(n) {
    if (n === 1){
        return false;
    }
    var arr = Array.apply(null, {length: (Math.abs(n)+1)}).map(Number.call, Number);
    arr = arr.slice(1);
    var resultSum =0;
     arr.forEach(function(a){
        if(n%a === 0){
            resultSum += 1;
        }
    });

    return is_prime(resultSum);
};

console.log(prime_number_of_divisors(9));