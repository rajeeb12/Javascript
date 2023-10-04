// this refers to the current context(value)
const user = {
    username : "Rajeeb",
    price: 899,

    welcomMessage: function(){
        console.log(`${this.username} welcome to the website`)
        //console.log(this)
    }
}

user.welcomMessage()
user.username = "Rohan"
user.welcomMessage()
console.log(this) // refers to the empty object (inside node enviroment)
// this work different in different area 
// function one(){
//     const username ="Rajeeb"
//     console.log(this) // bunch of information
//     console.log(this.username) // undefined
//     // these two will give different output
// }
// one()
// basically function k undar differently kaam karta hai aur object k andar differently kaam karta hai this

//************ 

// explicit
// const addTwo = (num1, num2) => { 
//     return (num1 + num2)
// } 

// implicit
//const addTwo = (num1,  num2) => num1 + num2
//or
// const addTwo = (num1 , num2) =>(num1 + num2)
const addTwo = (num1 , num2) => ({userName : "Rajeeb"}) // object return

// this with function act as global object but inside object it will refer to the context
