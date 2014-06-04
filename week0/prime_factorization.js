"use strict";

var is_prime = function (n) {
    if (n === 1) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    if (n % 2 === 0) {
        return false;
    }
    var allNums = Array.apply(null, {length: (n)}).map(Number.call, Number).filter(function (a) {
        return (a % 2 != 0)
    });
    allNums = allNums.slice(1);

    return !(allNums.some(function (a) {
        return (n % a) === 0;
    }));
};

var prime_factorization = function (num) {
    if (is_prime(num)) {
        return [
            [num, 1]
        ]
    }
    else {
        var allNums = Array.apply(null, {length: (num)}).map(Number.call, Number).filter(function (a) {
            return (a % 2 != 0)
        });
        allNums = allNums.slice(1);
        allNums.unshift(2);
        allNums = allNums.filter(function (a) {
            return (is_prime(a) && (num % a === 0));
        });

        var result =[];
        allNums.forEach(function(a){
            var count = 0;
            while(num % a === 0){
                count += 1;
                num = parseInt(num / a);
            }
            result.push([a, count]);
        });
        return result;
    }
};

console.log(prime_factorization(1000));