//forEach

function increasePrice() {
    this.price += this.price * 0.05;
}

var iPhone = { productName: 'IPhone', price: 60000, increasePrice: increasePrice };

var products = [
    { productName: 'TV', price: 5000, increasePrice: increasePrice },
    { productName: 'Computer', price: 10000, increasePrice: increasePrice },
    { productName: 'Mobile', price: 6000, increasePrice: increasePrice },
    iPhone
];

products.forEach(p => {
    //p.price += p.price * 0.05;
    p.increasePrice();
});

console.log(products);


//*************************************************************************************************** */

//includes  -   returns true if value exist once in the array
var existMobile = products.includes({ productName: 'Mobile', price: 6000, increasePrice: increasePrice });    //returns false as it consider a new object
var existIPhone = products.includes(iPhone);    //returns true as it is refering to same object

console.log('existMobile', existMobile);
console.log('existIPhone', existIPhone);

//**************************************************************************************************** */

var indexOfIphone = products.indexOf(iPhone);
console.log('indexOfIPhone', indexOfIphone);

var indexOfMobile = products.indexOf({ productName: 'Mobile', price: 6000, increasePrice: increasePrice });
console.log('indexOfMobile', indexOfMobile);//returns -1, as it doesn't find the object reference