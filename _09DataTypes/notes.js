console.log("a", typeof ("a"));

function fun() { }
console.log(fun, typeof (fun));

console.log(10, typeof (10));
console.log(10.5, typeof (10.5));

console.log(true, typeof (true));

var obj = {};
console.log(obj, typeof (obj));


var a;
console.log(a, typeof (a)); //undefined, undefined
var b = null;
console.log(b, typeof (b)); //null, object


var c = 10;
var d = "10";
console.log("c==d", c == d);    //true
console.log("c===d", c === d);  //false


var e = String(c);  //converts number to string
console.log(e, typeof (e));

var f = c.toString();   //converts number to string
console.log(f, typeof (f));

var g = Number(d);
console.log(g, typeof (g)); //10    number
var h = Number("a10");
console.log(h, typeof (h)); //NaN   number
var i = Number(""); //or Number(" ");
console.log(i, typeof (i));   //0     number

var j = parseInt(d);
console.log(j, typeof (j)); //10    number
var k = parseInt("10.5");
console.log(k, typeof (k)); //10    number
var l = parseInt("10A");
console.log(l, typeof (l)); //10    number
var m = parseInt("A10");    //or parseInt("") or parseInt(" ")
console.log(m, typeof (m)); //NaN   number