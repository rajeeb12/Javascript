function setUsername(userName)
{
    this.userName = userName;
}

const user = function(userName, email, password){
    setUsername.call(this,userName);

    this.email = email;
    this.password = password;
}
const chai = new user("rajeeb","chai@gmail.com","123")
console.log(chai)