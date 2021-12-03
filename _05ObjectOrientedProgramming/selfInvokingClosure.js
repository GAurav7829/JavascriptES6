//closures
var bankAccount = (function() {
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
})();

console.log(`Initial Account balance: ${bankAccount.getCurrentBalance()}`);
bankAccount.deposit(200);
console.log(`Account balance after deposit: ${bankAccount.getCurrentBalance()}`);
bankAccount.withdraw(50);
console.log(`Account balance after withdraw: ${bankAccount.getCurrentBalance()}`);