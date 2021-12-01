//proto chain - prototype chain
var person = {
    name: 'grv',
    age: 20
};
console.log(person);
console.log(person.__proto__);

var student = {
    rollNo: 123
};
console.log(student.__proto__);
student.__proto__ = person;
console.log(student.__proto__);

var medicalStudent = {
    mainSubject: 'Bio'
};
console.log(medicalStudent.__proto__);
medicalStudent.__proto__ = student;
console.log(medicalStudent.__proto__);
console.log('Medical Student Name:', medicalStudent.name);