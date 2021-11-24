function myFunction() {
    console.log('Hello JS!');
}

const hello = setInterval(myFunction, 1000);

function stopInterval() {
    clearInterval(hello);
}

setTimeout(stopInterval, 5000);