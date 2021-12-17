//arrays
var prices = [50, 80, 300]; //reference variable 'prices', that stores reference of object
console.log(prices);
console.log(prices.length);
prices[0] = 400;
console.log(prices);

//for loop
console.log('Elements using loop');
for (var p in prices) {
    console.log(prices[p]);
}

//array of object
var student = [
    { studentName: 'grv', age: 27 },
    { studentName: 'monu', age: 18 },
    { studentName: 'savan', age: 22 }
];

console.log('Array of object');
console.log(student.length);
for (var s in student) {
    console.log('Name: ' + student[s].studentName + ', Age: ' + student[s].age);
}