//Polymorphism in classes
class Person {  //parent class
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Person name: ${this.name}. Age is ${this.age}`;
    }
}

class Teacher extends Person {  //child class or derived class
    subject;
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    getDetails() {
        return `${super.getDetails()}. Subject is ${this.subject}`;
    }
}

console.log(new Person('grv', 20).getDetails());
console.log(new Teacher('monu', 20, 'English').getDetails());