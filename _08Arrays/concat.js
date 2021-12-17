//concat
var products = [
    { productName: 'TV', price: 5000 },
    { productName: 'Computer', price: 10000 }
];

var newProduct = [
    { productName: 'Mobile', price: 6000 }
];

var allProducts = products.concat(newProduct);

console.log('products', products);
console.log('new products', newProduct);
console.log('all products', allProducts);