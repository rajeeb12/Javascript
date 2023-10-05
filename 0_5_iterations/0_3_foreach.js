const codeing = ["js", "java", "Ruby", "swift", "cpp"];

// codeing.forEach(function(name){
//     console.log(name)
// })

// function prime(name)
// {
//     console.log(name)
// }

// codeing.forEach(prime)

// codeing.forEach((item, index) => {
//   console.log(item, index);
// });

//******************* IMP ***********************
//important in db 

const myCoding = [
  { name: "java", languageName: "java" },
  { name: "js", languageName: "javascript" },
  { name: "rb", languageName: "ruby" },
];

myCoding.forEach((obj, index) =>{
    console.log(obj.name , obj.languageName, index)  
})