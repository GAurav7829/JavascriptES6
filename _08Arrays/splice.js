//splice    -   removing elements
var products = [
    { productName: 'TV', price: 5000 },
    { productName: 'Computer', price: 10000 },
    { productName: 'Mobile', price: 6000 }
];

products.splice(1, 1);//(StartIndex, NoOfElementsToBeRemoved)//remove index at 1 i.e. Computer
console.log(products);

//splice    -   inserting elements
products.splice(1, 0, { productName: 'Laptop', price: 12000 });//adding at index 1
console.log('inserting elements', products);

//splice    -   replacing elements
products.splice(2, 1, { productName: 'Gamepad', price: 500 });
console.log('replacing element', products);