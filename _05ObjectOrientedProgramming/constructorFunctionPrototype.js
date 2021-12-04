//'prototype' property of constructor function
var Student = function() {};

//adding properties to prototype of constructor function
Student.prototype.maths = 70;
Student.prototype.physics = 65;
Student.prototype.chemistry = 75;
//adding methods to prototype of constructor function
Student.prototype.getTotalMarks = function() {
    return this.maths + this.physics + this.chemistry;
}

console.log(new Student()); //empty object
console.log(new Student().__proto__); //has properties and methods

var student = new Student();
console.log(student.maths);
console.log(student.physics);
console.log(student.chemistry);
console.log(student.getTotalMarks());