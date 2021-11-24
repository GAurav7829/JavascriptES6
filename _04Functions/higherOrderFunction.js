//EXAMPLE 1
let doSomeWork = function() {
    return function() {
        console.log('hello');
    };
}

let result = doSomeWork();
result();

//EXAMPLE 2
function areaOfCircle(r) {
    return function() {
        return Math.PI * r * r;
    }
}

let area = areaOfCircle(5);
console.log(area());