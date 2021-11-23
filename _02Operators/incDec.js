var a = 10;
console.log(a); //10

var b = ++a;
console.log(b, a);  //11    11

a = 10;
b = a++;
console.log(b, a);  //10    11

a = 10;
b = --a;
console.log(b, a);  //9     9

a = 10;
b = a--;
console.log(b, a);  //10    9