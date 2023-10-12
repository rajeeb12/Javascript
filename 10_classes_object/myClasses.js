// After ES6

// class User{
//     constructor(userName, email, password){
//         this.userName = userName;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}.abc`;
//     }

//     changeUsername(){
//         return `${this.userName.toUpperCase()}`
//     }

// }

// const chai = new User("rajeeb", "acb@gmail.com","112");

// console.log(chai.encryptPassword())
// console.log(chai.changeUsername())

//******************************** OR**********************

function UserOne(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

UserOne.prototype.encryptPassword = function(){
    return `${this.password}.abc`
}

const tea = new UserOne("raj","abs.gamil.com", "134")
console.log(tea.encryptPassword())