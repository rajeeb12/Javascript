const user ={
    username:'Rajeeb',
    loginCount : 5,
    isSignedIn: true,

    getDetail: function(){
        //console.log(this.username) -> error
        console.log(this.username) // current user k andr wala username ka baat ho rha hai nahi toh isse pata nahi ki kaunse ka ho rha hai
    }
}
console.log(user.getDetail())

function userDetail(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    return this;
}

const userOne = new userDetail("Rajeeb", 191,true);
const userTwo = new userDetail("Arrav", 34, false);

console.log(userOne)