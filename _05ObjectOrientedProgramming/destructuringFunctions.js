//destructuring functions
var fun1 = function({ name, ...other }) {
    console.log('fun1', name, other);
};

var student = { name: 'grv', email: 'grvsgh@gmail.com', age: 27 };
fun1(student);