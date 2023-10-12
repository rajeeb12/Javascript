class User{
    constructor(username){
        this.username = username;
    }

    logMe(params) {
        console.log(`The user is here ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email =email;
        this.password = password;
    }

    addCourse(){
        console.log(`This course was added by ${this.username}`)
    }
}

const raj = new Teacher("rajeeb",'rajeeb@gmail.com', "123")

console.log(raj.logMe())
console.log(raj.addCourse())