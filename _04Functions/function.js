//function with arguments
let getSimpleInterest = function(p, r, t) {
    let si = (p * r * t) / 100;
    return si;
}

let si1 = getSimpleInterest(1000, 8, 1);

console.log(`Simple Interest is ${si1}`);

//function with no args
function showCity() {
    console.log('Delhi');
}

showCity();

//function calling another function
//----------example 1
function showCountry() {
    showCity();
    console.log('India');
}

showCountry();

//----------example 2
let square = function(n) {
    return n ** 2; //n power 2
}
let cube = function(n) {
    return square(n) * n;
}
let result = cube(5);
console.log(result);

//arguments keyword -   demo
let bill = function() {
    console.log(arguments);
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log('total bill: ' + sum);
}
bill(20);
bill(20, 30, 50);

//recursion
let factorial = function(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log('factorial: ' + factorial(5));

//default arguments
let sum = function(a = 10, b = 20) {
    return a + b;
}
console.log(sum(1)); //a = 1, b = 20 output = 21
console.log(sum(1, 2)); //a = 1, b = 2 output = 3
console.log(sum()); //a = 10, b = 20 output = 30