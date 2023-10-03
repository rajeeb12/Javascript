const marvelHeroes = ["ironman","thor","spiderman"]
const dc= ["superman", "batman", "flash"]

//marvelHeroes.push(dc)
//console.log(marvelHeroes)

const newArray = marvelHeroes.concat(dc)
//console.log(newArray)

const newArray1 = [...marvelHeroes, ...dc]
console.log(newArray1)

const anotherArray = [1,2,3,[4,5,6], [7,8,[9,10]]]
const realAnotherArray = anotherArray.flat(Infinity) // saare sub arrays jo array mein hai un sab ko ek single array mein dal k retunr
console.log(realAnotherArray)

console.log(Array.from("Rajeeb")) // convert it into array
console.log(Array.from({name:"Rajeeb"})) // when it is not able to return array it will just return an empty array

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3))