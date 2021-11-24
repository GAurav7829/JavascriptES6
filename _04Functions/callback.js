function Callback1(name, age) {
    console.log(`Callback1: Name is ${name}. Age is ${age}`);
}

function Callback2(name) {
    console.log(`Callback2: Name is ${name}.`);
}

//high order function
function doWork(name, age, myFunctionRef) {
    name = `Mr. ${name}`;
    age++;

    myFunctionRef(name, age);
}

doWork('grv', 27, Callback1);
doWork('grv', 27, Callback2);