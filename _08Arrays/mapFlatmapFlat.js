//map   -   one to one, you should return a single value
var products = [
    { productName: 'TV', price: 5000 },
    { productName: 'Computer', price: 10000 },
    { productName: 'Mobile', price: 6000 }
];
console.log(products);

var newProducts = products.map((p) => {
    p.productName = p.productName.toUpperCase();
    p.price += 1000;
    return p;
});
console.log(newProducts);

//flat map  -   one to many. You can return an array
var newProducts2 = products.flatMap((p) => {
    if (p.productName === "COMPUTER") {
        var p2 = { ...p, price: p.price + 500 };
        return [p, p2];
    } else {
        return p;
    }
})
console.log(newProducts2);

//flat - converts nested arrays into plain array
var a = [10, 20, [30, 40], 50, 60];
var b = a.flat();
console.log('actual array', a);
console.log('flat array', b);