"use strict";
var basePerson = (function() {
    var _private = {
        personName : ""
    };

    return {
        setName : function(name) {
            _private.personName = name;
        },
        getName : function() {
            return _private.personName;
        }
    };
} () );