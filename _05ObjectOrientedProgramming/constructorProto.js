//Inheritance with Constructor Functions - using '__proto__' method
var Teacher = function(name) {
    this.name = name;
}

var PhysicsTeacher = function(mainSubject) {
    this.mainSubject = mainSubject;
}

var physicsTeacher = new PhysicsTeacher('physics');
physicsTeacher.__proto__ = new Teacher('grv');
console.log(physicsTeacher);
console.log(physicsTeacher.name);
console.log(physicsTeacher.mainSubject);