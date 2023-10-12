const myHeroes = ["superman", "spiderman", "greenlantern"]

const heroes = {
    supermna: "fly",
    spiderman: 'sling',

    getspidermanPower : function(){
        console.log(`spiderman has sling power`);
    }
}

// Object.prototype.rajeeb = function(){
//     console.log(`Rajeeb is in all object`)
// }
Array.prototype.heyRajeeb = function(){
    console.log("Say hello")
}

//myHeroes.rajeeb()
myHeroes.heyRajeeb()

//Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Mondern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) // TeachingSupport.__proto__ = Teacher

String.prototype.trueLength = function(){ // added new functionality in String
    console.log(`${this}`)
    console.log(`true length : ${this.trim().length}`)
}

const name = "Rajeeb            ";
name.trueLength()
"executed".trueLength();