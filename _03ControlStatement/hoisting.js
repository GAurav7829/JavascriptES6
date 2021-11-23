console.log('statement 1', x);  //x = undefined //hoisted but takes default value
console.log('statement 2');
var x = 1;
console.log('statement 3', x);  //x = 1
console.log('statement 4');
console.log('statement 5');