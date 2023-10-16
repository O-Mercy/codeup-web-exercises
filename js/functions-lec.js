"use strict";

// Function Definition

// Create a function that takes in two numbers and returns the sum of the two numbers.

// function sum(num1, num2) {
//     return num1 + num2;
// }
// to call the function / execute the function
// parameters (num 1, num 2 have empty values)
// arguments give parameters value (num 1= 5, num 2= 3)

// function sum(num1, num2 ) {
//     return num1 + num2;
// }
// console.log(sum(5, 2));


// Create a function named fullName that takes in two inputs, a first name and last name, and returns the first name and last name concatenated together.

// Function Declaration
// function fullName(firstName, lastName) {
//     return firstName + " " + lastName;
// }
// console.log(fullName("Mercy", "Osugo"));

// Refactor with template literals

// function fullName(firstName, lastName) {
//     return `${firstName} ${lastName}`
// }
//
// console.log(fullName("Mercy", "Osugo"));
// console.log(`Hey ${fullName('Mercy', 'Osugo')} did you know 5 + 2 = ${sum(5, 2)}`)


// Anonymous function / Function Expression
// const decrement = function(input){
//     return input - 1;
// }
// console.log(decrement(5));

//Arrow Functions

// Function Declaration
// function fullName(firstName, lastName) {
//     return firstName + " " + lastName;
// }

// arrow functions

// longer arrow function
// const fullName = (firstName, lastName) => {
//     return firstName + " " + lastName;
// }


// if an arrow function only has 1 parameter, parenthesis are optional
const fullName = str

// shorter arrow function
// the return is implied, if no curly braces are present.
// const fullName = (firstName, lastName) => firstName + " " + lastName;
//
// console.log(fullName('Mercy', 'Osugo'));



// Create a function that takes in a string and transforms the string to lowercase.

let input = "HoW On eArTh doEs thIs wOrk?"

// Function Declaration
// function lowercaseString(str) {
//     sampleString = str.toLowerCase()
// }
// lowercaseString(sampleString);
// sampleString

const sampleString = (string) => input.toLowerCase()
console.log(sampleString(input));

// function lowerCaseString(str) {
//     sampleString = str.toLowerCase();
// }
// console.log(sampleString);

// lowerCaseString(sampleString);

// console.log(sampleString);

// Arrow Function

// const lowerCaseString = (str) => {
//     sampleString = str.toLowerCase()
// };
//
// console.log(sampleString)
// lowerCaseString(sampleString);
// console.log(lowerCaseString(sampleString));
// console.log(sampleString);

// function increment(num) {
//     alert(num + 1);
// }
//

// Cannot log a value if nothing is returned, the result would be undefined.
// console.log(increment(5));

function greeting(greeting = 'Howdy!') {
    return greeting;
}

console.log(greeting());
console.log(greeting('Greetings!'));


let globalVar = "Hello! My name is Globie!"

function test() {
    let localVar = 'Hello, my name is Lola';
    console.log(localVar);
    {
        let innerVar = 'Nested Var!'
        console.log(innerVar);
        console.log(localVar);
    }
    console.log(globalVar);
}

// console.log(localVar)
test();

let x = 300;
let y = 100;

function scopeExample() {
    let x = 1;
    let y = 2;
    console.log(`x: ${x} y: ${y}`);
    return x + y;
}

console.log(`x: ${x} y: ${y}`);
let returnValue = scopeExample();
console.log(returnValue);

