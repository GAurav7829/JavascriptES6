//reverse
var products = [
    { productName: 'TV', price: 5000 },
    { productName: 'Computer', price: 10000 },
    { productName: 'Mobile', price: 6000 },
    { productName: 'IPhone', price: 60000 },
    { productName: 'Table', price: 6000 },
    { productName: 'Lamp', price: 6000 },

];
products.reverse()
console.log(products);    //reverse the current array

//slice(startIndex, endIndex)
var sliceProduct = products.slice(2,5);//index 2,3,4
console.log('slice Products', sliceProduct);

