//closures
var bankAccount = function() {
    var accountBalance = 1000; //private
    var deposit = function(depositAmount) {
            accountBalance += depositAmount;
        } //private
    var withdraw = function(withdrawAmount) {
            accountBalance -= withdrawAmount;
        } //private

    var getCurrentBalance = function() {
            return accountBalance;
        } //private

    return { deposit, withdraw, getCurrentBalance }; //making public
}

var firstAccount = bankAccount(); //everytime we call bankAccount function, a new copy will generate
console.log(`Initial Account balance: ${firstAccount.getCurrentBalance()}`);
firstAccount.deposit(200);
console.log(`Account balance after deposit: ${firstAccount.getCurrentBalance()}`);
firstAccount.withdraw(50);
console.log(`Account balance after withdraw: ${firstAccount.getCurrentBalance()}`);