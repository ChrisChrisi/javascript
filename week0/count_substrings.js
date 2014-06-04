"use strict";

/**
 * count_substrings("This is a test string", "is") === 2
 count_substrings("babababa", "baba") === 2
 count_substrings("JavaScript is an awesome language to program in!", "o") === 3
 count_substrings("We have nothing in common!", "really?") === 0
 count_substrings("This is this and that is this", "this")  === 2
 */
var count_substrings = function (haystack, needle) {
    var num = needle.length;
    var count = 0;
    while (haystack.indexOf(needle) >= 0) {
        count += 1;
            haystack = haystack.slice(num + haystack.indexOf(needle));
        if (count > 10) {
            break;
        }
    }

    return count;
};

console.log(count_substrings("This is this and that is this", "this"));