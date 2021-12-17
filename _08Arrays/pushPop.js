//array - push
var prices = [20, 30, 40, 50];
console.log(prices);
prices.push(60);
console.log(prices);

//array - pop
var popedVal = prices.pop();//remove last value of array
console.log(prices);
console.log('Deleted Value: ' + popedVal);

//array of objects
var products = [
    { productName: 'TV', price: 5000 },
    { productName: 'Computer', price: 10000 },
    { productName: 'Mobile', price: 6000 }
];
console.log('before push: ', products);
products.push({ productName: 'Laptop', price: 12000 });
console.log('after push: ', products);

console.log('poped value: ', products.pop());
console.log('after pop: ', products);