//polymorphism using objects
var person = {
    name: 'grv',
    age: 20,
    getDetails: function() {
        return `Name is ${this.name} and age is ${this.age}`;
    }
};

var teacher = {
    mainSubject: 'Math',
    getDetails: function() {
        return `${this.__proto__.getDetails()}. Teacher's Main subject is ${this.mainSubject}`;
    }
};

teacher.__proto__ = person; //Inheritance relation

console.log(teacher.getDetails()); //calls child method
console.log(person.getDetails());