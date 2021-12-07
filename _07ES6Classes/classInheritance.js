//class inheritance
class Teacher {  //parent class
    name;
    constructor(name) {
        this.name = name;
    }
}
class PhysicsTeacher extends Teacher {   //child class
    mainSubject;
    constructor(name, mainSubject) {
        super(name);
        this.mainSubject = mainSubject;
    }

    getDetails(){
        return `Teacher name is ${this.name}. Main Subject is ${this.mainSubject}`;
    }
}

console.log(new Teacher());
console.log(new PhysicsTeacher());
let phyTeacher = new PhysicsTeacher('grv', 'Physics');
console.log(phyTeacher);
console.log(phyTeacher.getDetails());