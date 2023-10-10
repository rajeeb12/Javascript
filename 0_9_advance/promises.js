const promiseOne = new Promise(function(resolve, reject){
    // Do asyn task
    // DB call, cryptograpy, network
    setTimeout(function(){
        console.log("Asyn task is completed")
        resolve();
    },1000);
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

// single mein hi kar dia
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asyn task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Asyn 2 resolved")
})

//value pass hoga then mein, data consume
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name:"Rajeeb", email:"rajeeb1206@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

// chaining promise
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        const error = false;
        if(!error)
        {
            resolve({email:"rajeeb1206@gmail.com",password:"123" })
        }
        else{
            reject("Something went wrong.");
        }
    },1000)   
})
promiseFour
.then(function(user){
    console.log(user)
    return user.email;
})
.then(function(username){
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log("I will executed even if there is a error.")
})

// Using async await

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"javascript", password:"123"})
        }
        else{
            reject("ERROR: Js went wrong.")
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    }
    catch(error)
    {
        console.log(error)
    }
}

consumePromiseFive()

// fetch data using asyn await
// fetch returns a promise

// async function getAllUser(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         console.log(response)
//         const data = await response.json()
//     }catch(error){
//         console.log(error)
//     }
// }

// getAllUser()

// fetch data using .then .catch
 
// yaha pe jab aaega then next code run hoga 
// and upar it will wait until the code or data
// or any response aa nahi jata for eg database connectivity

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch(()=>{
    console.log("E:",error);
})