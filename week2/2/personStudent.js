"use strict";

function Person(firstName, secondName, age){
    var initirals = [firstName[0], secondName[0]].join(" ");

    this.getName = function(){
        return [firstName, secondName].join(" ");
    };

    this.getAge = function(){
      return age;
    };
}

Person.prototype.sayHello = function(){
    return "I am " + this.getName();
};

Person.prototype.toString = function(){
    return this.getName();
};

function Student(firstName, secondName, age){
    Person.call(this, firstName, secondName, age);
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.toString = function() {
    return Person.prototype.toString.call(this) + " I am student";

};
var s = new Student("Dobi", "Dobchev", 20);
console.log(s.toString());