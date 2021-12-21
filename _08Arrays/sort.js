//Sort  -   numeric array
var numericArray = [5, 2, 6, 8, 1, 7, 3];
numericArray.sort();//assending order
console.log(numericArray);
numericArray.sort((a, b) => b - a);//decending order
console.log(numericArray);

//Sort  -   string array
var stringArray = ['c', 'h', 'j', 'a'];
stringArray.sort();//assending order
console.log(stringArray);
var decSortArray = stringArray.sort((a, b) => {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
});//decending order
console.log(decSortArray);

//Sort  -   object array
var products = [
    { productName: 'TV', price: 5000 },
    { productName: 'Computer', price: 10000 },
    { productName: 'Mobile', price: 6000 },
    { productName: 'IPhone', price: 60000 },
    { productName: 'Table', price: 6000 },
    { productName: 'Lamp', price: 6000 },

];

products.sort((a, b) => a.price - b.price); //assending order
console.log(products);

products.sort((a, b) => b.price - a.price);//decending order
console.log(products);