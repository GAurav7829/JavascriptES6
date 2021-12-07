//static properties and methods in class
class Student {
    name;
    marks;
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
        Student.studentCount++;//Incrementing student count static value
    }
    //static method
    static compareStudentMarks(student1, student2) {
        return student1.marks - student2.marks;
    }
    //static property
    static studentCount = 0;
}

var student1 = new Student('grv', 90);
console.log(student1);
var student2 = new Student('monu', 80);
console.log(student2);
console.log(Student.compareStudentMarks(student1, student2));
console.log(Student.studentCount);