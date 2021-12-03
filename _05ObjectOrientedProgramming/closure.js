//closure - simple example
function bankAccountDeposit() {
    var currentBalance = 1000;
    let deposit = function(depositAmount) {
        currentBalance += depositAmount;
        return `Current Account Balance is ${currentBalance}`;
    }
    return deposit;
}

//console.log(currentBalance); //can't be access
var dp = bankAccountDeposit();
console.log(dp(200)); //output 1200, calls the deposit function that is returned by bankAccountDeposit
console.log(dp(100)); //output 1300