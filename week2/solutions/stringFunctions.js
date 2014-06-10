"use strict";

//returns a new string, where every `"_"` is replaced by a dash - `"-"`
String.prototype.dashalize = function () {
    return this.replace(/_/g, "-");
};

String.prototype.times = function (amount) {
    return new Array(amount + 1).join(this + " ");
};

String.prototype.blank = function () {
    return this
        .replace(/\s/g, "")
        .length === 0;
};

var str = "something_with_dashes-sss";
str.dashalize();
//console.log(str.dashalize());
//console.log(str.times(3));

//console.log("           sdf vf ".blank());