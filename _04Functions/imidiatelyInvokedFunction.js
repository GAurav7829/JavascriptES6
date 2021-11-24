let printMe = function(value) {
    console.log(`Value: ${value}`);
}

printMe((function() {
    return 10 * 10;
})());

printMe((function(n) {
    return n * n;
})(5));