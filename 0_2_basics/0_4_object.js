//const tinderUser = new Object() // singleton object
const tinderUser = {} // non singleton object

tinderUser.id = "123abc" 
tinderUser.name = "Rajeeb"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email: "rajeeb1206@gmail.com",
    fullname:{
        userFullName:{
            firstname: "Rajeeb",
            lastname: "bhowmick",
        }
    }
} 

//console.log(regularUser.fullname.userFullName.firstname)
const obj1= {1:'a' , 2:'b'}
const obj2= {3:'a', 4:'b'}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2) // copies all enumerable own properties from one another and return new object
//({} // target, obj1,obj2,obj3,(source))

const obj3 = {...obj1,...obj2} // sperad operator
// console.log(obj3)

const user = [
    {
        id: 1,
        name : 'Rajeeb',
    },
    {
        id: 1,
        name : 'Rajeeb',
    },
    {
        id: 1,
        name : 'Rajeeb',
    },
    {
        id: 1,
        name : 'Rajeeb',
    },
]

console.log(tinderUser)
console.log(Object.keys(tinderUser)) // return an array
console.log(Object.values(tinderUser)) // return an array
console.log(tinderUser.hasOwnProperty("isLoggedIn"))