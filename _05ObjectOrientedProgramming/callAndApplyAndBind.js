//example 1 - call
var person = {
    age: 20
};

let birthDay = function(n) {
    this.age += n;
}
console.log(person);
birthDay.call(person, 1); //object, argument
console.log(person);

//example 2 - apply
var student = {
    name: 'grv',
    section: 'A'
}

function calculateTotalMarks(s1, s2, s3) {
    let totalMarks = s1 + s2 + s3;
    let msg = `Hey ${this.name}, your total marks is ${totalMarks}`;
    console.log(msg);
}

console.log(student);
calculateTotalMarks.apply(student, [50, 60, 70]); //object, array

//example 3 - bind
const fun = calculateTotalMarks.bind(student); //creates new function
fun(20, 30, 40); //call function explicitly