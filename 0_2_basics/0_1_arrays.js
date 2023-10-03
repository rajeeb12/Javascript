// array
// shallow copies - share the same reference so the manipulation will happen in the original array

const newArray = new Array(1,2,3,4)

// newArray.push(5)
// newArray.pop() // from last pop
// newArray.shift() // shift to the left by 1 and pop from first
// newArray.unshift(9) // add in front and shift the rest in right 
// console.log(newArray)

// const array =  newArray.join()
// console.log(newArray)
// console.log(array) // bind the newArray in array and return as a String with comma seperated

// slice and splice
console.log("A", newArray)

// slice
const myn1 = newArray.slice(1,3)
console.log("sclice", myn1) // (return a copy of a section of an array)
//does not include the whole range and do not manipulate the original array 
console.log("B",newArray)

// splice
const myn2 = newArray.splice(1,3)
console.log("splice",myn2) // do include the whole range and remove the element from array
//(manipulate the original array) and return.
console.log("C", newArray)
