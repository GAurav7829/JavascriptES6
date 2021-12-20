//filter    - filter out the elements
var products = [
    { productName: 'TV', price: 5000 },
    { productName: 'Computer', price: 10000 },
    { productName: 'Mobile', price: 6000 }
];

console.log('all products', products);
var productsPriceLessThan10000 = products.filter(p => p.price < 10000);
console.log('productsPriceLessThan10000', productsPriceLessThan10000);

//find  -   returns the first matching element
console.log('find product > price 5000', products.find(p => p.price > 5000));

//findIndex -   return index of element
var index = products.findIndex(p => p.price > 5000)
console.log('find index of first matching element', index);
//replace element at that index
products.splice(index, 1, { productName: 'Apple Computer', price: 20000 });
console.log('update products', products);