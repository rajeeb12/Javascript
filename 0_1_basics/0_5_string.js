const name = "Rajeeb"
const repoCount = 10

//console.log("My name is" + name + "and I have" + repoCount +"repo") old way not that much readable
console.log(`My name is ${name} and I have ${repoCount} repos`) // string interpolation

const gameName = new String("Rajeeb") //key value pair

console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(0))
console.log(gameName.indexOf('a'))

const newGameName = gameName.substring(0,4)
console.log(newGameName)

const anotherGame = gameName.slice(-2,4)
console.log(anotherGame)

// used in while user delibrately or not delibrately include spaces
const anotherGame1 ="        Rajeeb      "
console.log(anotherGame1.trim()) // remove white spaces

const url = "https://Rajeeb/Rajeeb@webdev"
console.log(url.replace("@" , "-"))

console.log(url.includes("Rajeeb")) // word present or not

// split
const anotherNewName = "Rajeeb-Bhowmick-web-software"
console.log(anotherNewName.split("-"))


