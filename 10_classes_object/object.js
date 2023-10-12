// function can make it act as object 
// object ka prototype = null
// function technically reference object 

function multiplyByFive(num){
    return num * 5;
}

multiplyByFive.power = 3
console.log(multiplyByFive(5))
console.log(multiplyByFive.power)

// prototype , new

function user(name, price)
{
    this.name = name
    this.price = price
}

user.prototype.increment = function(){
    this.price++
}

user.prototype.printMe = function(){
    console.log(`name ${this.name} `)
}

const chai = new user("char", 25)
const coffee = new user("coffee", 250)

chai.increment()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: 
The constructor function is called with the specified arguments and this is bound to the newly created object.
 If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, 
 to be the intended return value.

The new object is returned: After the constructor function has been called, 
if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
