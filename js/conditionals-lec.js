"use strict"
// console.log("hello world");
//
// let age = 16;
// if(age >= 16) {
//     console.log("You're eligible to drive");
// }
//
// if(age < 16) {
//     console.log("You're not eligible to drive");
// }

// if/else conditional example
// if(age >= 16) {
//     console.log("You can drive");
// } else {
//     console.log("You can't drive")
// }
// //if/else if/else conditional
let currentDay = prompt("What's the day today?").toLowerCase()
// if(currentDay === 'monday' || currentDay === 'tuesday' || currentDay === 'wednesday') {
//     console.log(`I love ${currentDay}`)
// } else {
//     console.log(`${currentDay} is not a valid day`);
// }
//
// let letsPlay = confirm("Do you want to play?");
// if(letsPlay) {
//     console.log("Great lets play xyz");
// } else {
//     console.log("maybe next time");
// }
//
// const username = "user"
// const password = "password"
//
//
// const userUsername = prompt("Please enter a username")
// const userPassword = prompt("Please enter a password")
// if(username === userUsername && password === userPassword) {
//     console.log("You're logged in");
// } else if (username !== userUsername && password !== userPassword) {
//         console.log("Incorrect username and password");
//     } else if (username !== userUsername) {
//     console.log("Incorrect username")
// } else if (password !== userPassword) {
//     console.log("Incorrect password")
// } else {
//     console.log("Unexpected error");
// }

// //Nested conditionals
// if(username === userUsername) {
//     if(password === userPassword){
//         console.log("Logged in")
//     } else {
//         console.log("Incorrect password")
//     }
// } else {
//     console.log("invalid username")
// }

// Ternary operator
// ? -> represents put "if" condition
// : -> represents "else" condition
let name = "Bob"
let greeting = name === "Bob" ? `Hello ${name}` : "Hello stranger!"
console.log(greeting);

let currentCurrentDay = currentDay === "monday" || currentDay === "tuesday" || currentDay === "wednesday" ? `I love ${currentDay}` : `${currentDay} is not valid`

// Switch statement
let daysOfWeek = "Saturday"
switch(daysOfWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("It's a weekday");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's a weekend day");
        break;
    default:
        console.log("Invalid day of the week");
}

// using function and if/else
function sayHello(name) {
    if(name.length <= 20) {
        return `Hello, ${name}`
} else {
    return `That is way too long of a ${name}.`
    }
}
console.log(sayHello("Mercy"));