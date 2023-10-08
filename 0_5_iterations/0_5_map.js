const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNumber.map((num) => num + 2)
// console.log(newNum)

// first map ka output will be input of second map
const newNum = myNumber.map((num) => num * 10).map((num) => num + 5).filter((num) => num > 40)
console.log(newNum)

// When the operation or transformation is done, a new array is returned as a result.
// The map method transforms each element of an array and creates a new array with the transformed values,
// while the filter method creates a new array by selecting only the elements that satisfy a specified condition