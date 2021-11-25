var fun1 = function() {
    console.log('fun1: ', this);
}

console.log('outside fun: ', this);

fun1();

//arrow function
//example 1
var fun2 = () => {
    console.log('arrow fun: ', this);
}
fun2();

//example 2
var student = {
    name: 'grv',
    getStudentName: function() {
        console.log(this); //pointing to current object
    },
    getStudentName2: () => {
        console.log('Inside getStudentName2:', this); //global this
        setTimeout(() => {
            console.log('Inside getStudentName2(setTimeout): ', this); //pointing to global
        }, 3000);
    }
};
//student.getStudentName();
student.getStudentName2();

//setTimeout(student.getStudentName.bind(student), 3000);

//example 3
let fun3 = (a, b) => {
    return a + b;
}
console.log(fun3(2, 3));

let fun4 = (a, b) => a + b;
console.log(fun4(5, 6));