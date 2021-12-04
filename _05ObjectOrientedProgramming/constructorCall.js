//Inheritance with Constructor Functions - using 'call' method
var Teacher = function(name) {
    this.name = name;
}

var PhysicsTeacher = function(name, mainSubject) {
    Teacher.call(this, name);
    this.mainSubject = mainSubject;
}

var physicsTeacher = new PhysicsTeacher('grv', 'physics');
console.log(physicsTeacher);