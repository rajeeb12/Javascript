// singleton

//object literals (declaration)
//Object.create() // created using constructor

const mySym = Symbol("key") // symbol declaration

const jsUser = {
    name: "Rajeeb",
    [mySym] : "myKey1", // this it the syntax
    age: 26,
    email: "rajeeb1206@gmail.com",
    location: "kolkata",
}

// two ways to access 
console.log(jsUser.email) // mainly used
console.log(jsUser["email"]) 
console.log(jsUser[mySym]) // for symbol

//Object.freeze(jsUser) // cannot change inside the object

console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello user")
}

jsUser.greetingTwo = function(){
    console.log(`Hello user ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())