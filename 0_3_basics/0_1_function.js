// when nothing is passed undefined is shown
// !usernmae -> username === undefined

// shopping cart concept

function calculateCartPrice(...num1){ // rest operator sending multiple value in parameter
    return num1   
}

//console.log(calculateCartPrice(200, 300, 400))

const user ={
    username: "rajeeb",
    price: 20,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price} `)
    return 0
}

console.log(handleObject(user))

const newArray =[100, 200, 3000]

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(newArray))