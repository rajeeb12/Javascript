// // immediately invoked function expression (IIFE)
// Imagine you have a recipe for making cookies. 
// The recipe contains all the instructions and ingredients needed to bake delicious cookies. 
// Now, think of a function in programming as a similar set of instructions. 
// Usually, you define a function and then you call it whenever you want those instructions to be executed, 
// just like when you decide to bake cookies by following your recipe.

// Now, an IIFE is like a recipe that you don't keep for later use. 
// Instead, you decide to bake the cookies right after you write down the recipe.
//  In programming, an IIFE is a way to create a function and execute it immediately, all in one go.

// Here's why you might want to use an IIFE:

// Privacy: Imagine you have some secret ingredients in your cookie recipe that you don't want anyone else to see. 
// By putting your recipe in an IIFE, you can keep those secret ingredients hidden from the outside world. 
// Similarly, in programming, variables and functions declared inside an IIFE are not accessible from outside the IIFE.
//  This helps in keeping your code organized and secure.

// // Isolation: When you bake cookies, 
// you want to make sure the ingredients from your recipe don’t mix with ingredients from other recipes. 
// Similarly, an IIFE creates a little "sandbox" for your code to run in, so it doesn't interfere with other parts of your program.
//  It helps in avoiding conflicts between variables and functions.

// global scope k pollution k wajah se hoti hai problem so uske hatane k liae iife use hota hai

(function one(){
    console.log(`Hidden message`)
})();

((name) =>{
    console.log("message" , name)
})("Rajeeb");