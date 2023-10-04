const userEmail = []

// when variable is empty -> falsely

if(userEmail){
    console.log("Got user email")
}
else{
    console.log("No Value")
}

// falsely value

//false , 0 , -0, BigInt, 0n, "", null, undefined, NaN

//truthy value(suprise)
// "0" , 'false', " ", [], {} , function(){} 
// string k andr jo bhi value hai vo truthy value hai

// for object

const emptyObj = {}

if(Object.keys(emptyObj).length === 0)
{
    console.log("Got user data")
}
else{
    console.log("No data found")
}

// Nullish coalesing operation (??) : null undefined

// const val1 = 5 ?? 10
// const val1 = null ?? 5 // -> 5
// const val1 = undefined ?? 10 // -> 15
// const val1 = null ?? 10 ?? 19 // -> 10

console.log(val1)