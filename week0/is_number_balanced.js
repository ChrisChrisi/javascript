"use strict";
/**
is_number_balanced(9) === true
is_number_balanced(11) === true
is_number_balanced(13) === false
is_number_balanced(121) === true
is_number_balanced(4518) === true
is_number_balanced(28471) === false
is_number_balanced(1238033) === true
 */

var is_number_balanced = function(n) {
   if(parseInt(n/10) === 0){
       return true;
   }
   var digits = n.toString().split("");
  var num = digits.length;
   var firstHalf = digits.slice(0,parseInt(num/2));
   if(num%2 === 0){
      var secondHalf = digits.slice(parseInt(num/2));
   }
    else{
       var secondHalf = digits.slice(parseInt(num/2)+1);
   }

    var firstNum = firstHalf.reduce(function(a,b){return parseInt(a) + parseInt(b)});
    var secondNum = secondHalf.reduce(function(a,b){return parseInt(a) + parseInt(b)});
    return (firstNum === secondNum);
}

console.log(is_number_balanced(12381133));
