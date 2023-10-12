class User{
    constructor(username){
        this.username = username;
    }

    static createId(){ // yaha access nahi hoja jab bhi object banega
        return '123';
    }
}

const chai = new User("rajeeb")
console.log(chai.createId()) 