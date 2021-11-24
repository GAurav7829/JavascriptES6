//console.log(a); //a can't be accesible before initialization 
console.log(b); //accessible
let a = 10; //global variable
var b = 20; //global variable

function myFunction() {
    console.log(a); //accessible
    console.log(b); //accessible
    console.log(c); //accessible
    //console.log(d); //not accessible
    var c = 30; //local variable
    let d = 40; //local variable
    if (c != d) {
        console.log(a); //accessible
        console.log(b); //accessible
        console.log(c); //accessible
        console.log(d); //accessible
        var e = 50; //local variable
        let f = 60; //block variable
    }
    console.log(e); //accessible
    //console.log(f);//not accessible
}

myFunction();