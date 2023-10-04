//*************************** mini hoisting **********************
console.log(one(5)) // but this will not 
function one(num){
    return num + 1
}

console.log(addTwo(5)) // this will give error

const addTwo = function(num){
    return num + 2
}