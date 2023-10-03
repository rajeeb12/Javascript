const score = 300;
console.log(score);

const balance = new Number(500);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2)); // should be used mainly in e-commerce websites price calculation (preceison)

const anotherNumber = 123.5839;
console.log(anotherNumber.toPrecision(4)); // exactness of the number and return a string

const hundereds = 100000;
console.log(hundereds.toLocaleString("en-IN")); // return a string

//********************* Math ****************

console.log(Math.random()); // always generate between 0 - 1
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

// important tip
console.log(Math.floor(Math.random() * (max - min + 1) + min));
