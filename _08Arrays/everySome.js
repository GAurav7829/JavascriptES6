//every
var products = [
    { productName: 'TV', price: 5000 },
    { productName: 'Computer', price: 10000 },
    { productName: 'Mobile', price: 6000 }
];

var allPriceIsGreaterThan1000 = products.every(p => p.price > 1000);//returns true if all prices is greater than 1000 else return false
var allPriceIsGreaterThan10000 = products.every(p=>p.price>=10000);
console.log(allPriceIsGreaterThan1000);
console.log(allPriceIsGreaterThan10000);

//some
var somePriceIsGreaterThan5000 = products.some(p=>p.price>5000);//returns true is any of price is greater than 5000
console.log(somePriceIsGreaterThan5000);