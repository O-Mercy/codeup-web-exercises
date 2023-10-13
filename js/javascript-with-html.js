"use strict"

let myAge = 5
console.log(myAge)

// alert
alert("Hello Lasso")

// confirm
let confirmed= confirm("Are you sure you are in the correct cohort?")
console.log(confirmed)

// prompt
let userInput = prompt("Please type in your name")
alert(`Good to meet you ${userInput}`)


console.log("This is my external js file")




// Template literal and concatenation example
let myName = "Mercy"
let myAge = "25"
// concatenation
console.log("Hello " + myName + "My age is " + myAge);
// template literal
console.log(`Hello ${myName} I am ${myAge}`);