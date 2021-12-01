//Inheritance using __proto__
var person = { //parent Object
    name: 'grv',
    age: 20
};

var student = {
    rollNo: 123,
    marks: 70
};

student.__proto__ = person; //adding reference of person to student

console.log(student);
console.log(student.__proto__); //access parent object
console.log(student.name, student.age); //access parent object property


console.log('//////////////////////////////////////////////');

var customer = {
    shippingAddress: 'sample address',
    __proto__: person
};

console.log(customer.name, customer.age);

console.log('////////////////////////////////////////////////');
//parent Obj
var user = {
    username: '',
    password: '',
    isLoggedIn: false,
    login: function() {
        if (this.username === 'system' && this.password === 'system') {
            this.isLoggedIn = true;
            return true; //valid login
        } else {
            this.isLoggedIn = false;
            return false; //invalid login
        }
    }
};
//child Obj
var manager = {
    departmantName: 'IT',
    approveLeaves: function() {
        return 'Leaves approved';
    },
    dashboard: function() {
        return `${this.username} Dashboard`;
    }
}
manager.__proto__ = user;

manager.username = 'system';
manager.password = 'system';
console.log(manager.login());
console.log(manager.isLoggedIn);
console.log(manager.approveLeaves());
console.log(manager.dashboard());