//destructuring
var person = { firstName: 'grv', lastName: 'sgh', age: 27, city: 'Delhi', country: 'India' };

var { firstName: fn, lastName: ln, age: a } = person;
console.log(fn, ln, a);

var { firstName = 'Gaurav', lastName, age, email = 'grvsgh@gmail.com', ...other } = person;
//email is not there in person, it will take default value
//other: remaining property like city and country will be copied in other object
console.log(firstName, lastName, age, email);
console.log(other);