var x = 1;  //global
let y = 2;  //global

if(1 == 1){
    var z = 3;  //global
    let a = 4;  //local - block level variable
}

console.log(x, y, z);
console.log(a);//a = throw error(a is not defined) as a is local variable in if block