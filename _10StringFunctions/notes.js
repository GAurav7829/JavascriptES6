var str = "Gaurav";

//toUpperCase() -   convert string to upper case
console.log(str.toUpperCase());

//toLowerCase() -   convert string to lower case
console.log(str.toLowerCase());

//length    -   represents the count of characters
console.log(str.length);

//charAt()  -   returns character value at the given index
console.log(str.charAt(2));

//charCodeAt()  -   returns ascii value at the given index
console.log(str.charCodeAt(2));

//subStr()  -   returns the part of the string starting from start index upto specified length of string
console.log(str.substr(2, 3));

//indexOf() -   search for character or string in the actual string, if found it returns starting index, if not found returns -1
console.log(str.indexOf('h'));
console.log(str.indexOf('av'));

//lastIndexOf() -   gives the last possible index
console.log(str.lastIndexOf('a'));//    4   //as a comes 2 times, it returns the second one
console.log(str.lastIndexOf('h'));//    -1  //h is not in the string

//replace() -   replace string with another string
console.log(str.replace('a', 'A'));
console.log(str.replace('av', 'AV'));

//split()   -   split the string into array of string based on seperated character
var str1 = 'Hello How Are You';
console.log(str1.split(' '));
var str2 = 'a,b,c,d';
console.log(str2.split(','));

//trim()    -   remove unnecessary spaces from left and right side
var str3 = '   hi   ';
console.log(str3, str3.length);
console.log(str3.trim(), str3.trim().length);

//concat()  -   attaches 2 string as a single string
console.log(str1.concat(str2));
console.log(str1.concat(" ").concat(str2));