//pure function doesn't access any external values
//code of pure function solely depends on the arguments
//pure function doesn't have side effects
//pure function doesn't modify the arguments, must be treated as read only values
//returns identical return values to identical arguments

let getSquare = function(n) {
    let sq = n ** 2;
    return sq;
}

console.log(getSquare(2));
console.log(getSquare(5));

//example 2
let isValidLogin = function(username, password) {
    if (username == 'system' && password == '123') {
        return true;
    } else {
        return false;
    }
}
console.log(isValidLogin('system', '123'));