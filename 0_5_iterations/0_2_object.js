// Using for in loop

const myObject ={
    js : "Javascript",
    cpp: "C plus plus",
    rb : "Ruby",
    swift : "Swift by apple"
}

for(const key in myObject){
    console.log(`${key} shortcut for ${myObject[key]}`)
}

// for array

const arr =["js", "css", "cpp","java"]
for(const key in arr)
{
    console.log(`${key} is index of ${arr[key]}`)
}