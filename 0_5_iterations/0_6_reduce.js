const myNumber = [1, 2, 3];

// mainly used in shoping cart for calculating bill 

// const myTotal = myNumber.reduce(function(acc, curVal){
//     return acc + curVal;   
// }, 0)

const myTotal = myNumber.reduce((acc, curVal) =>acc  + curVal, 0)
console.log(myTotal)

const shoppingCart =[
    {
        itemName: "JS course",
        price: 1999,
    },
    {
        itemName: "Python course",
        price: 899,
    },
    {
        itemName: "JAVA course",
        price: 1799,
    },
    {
        itemName: "Data science course",
        price: 1199,
    },
]

const shoppinCartBill = shoppingCart.reduce((acc, item)=> item.price + acc , 0)

console.log(shoppinCartBill)
