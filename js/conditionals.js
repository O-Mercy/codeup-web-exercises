"use strict";

/* ########################################################################## */

// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message which relates to the
//  * color stated in the argument of the function. For colors you do not have
//  * responses written for, return a string stating so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *
//  *
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */

// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor(color) {
    if (color.toLowerCase() === "blue") {
        return "Blue is the color of the sky";
    } else if(color.toLowerCase() === "green"){
        return "Grass is green";
    } else if(color.toLowerCase() === "red"){
        return "Strawberries are red";
    } else if(color.toLowerCase() === "yellow"){
        return "The sun is yellow";
    } else {
        return `I don't know anything about ${color}`
    }
}
console.log(analyzeColor(randomColor));


// /**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
console.log(analyzeColor(randomColor));
// /**


//  * TODO:
//  * Comment out the code above, and refactor your function to use a switch-case statement
//  */
function analyzeColor(color) {
switch (color.toLowerCase()) {
    case "red":
        return "Red means danger"
    case "orange":
        return "oranges are orange"
    case "yellow":
        return "the sun is yellow"
    case "green":
        return "grass is green"
    case "blue":
        return "the sky is blue"
    case "indigo":
        return "indigo is indigo"
    case "violet":
        return "Violet is violet"
    default:
        return `I don't know anything about ${color}`
    }
}
console.log(analyzeColor(randomColor))


// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
// solution 1
// let userInput = prompt("Please enter color")
// let message = analyzeColor(userInput)
// alert(message);
// solution 2
let userInput = prompt("Please enter color")
alert (analyzeColor(userInput))


// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * everything for free!.
//  *
//  * Write a function named `calculateTotal` which accepts a lucky number and total
//  * amount, and returns the discounted price.

//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
//
// /**
function calculateTotal(luckyNumber, totalAmount) {
    switch(luckyNumber) {
        case 0:
            return totalAmount
        case 1:
            return totalAmount * 0.9
        case 2:
            return totalAmount * 0.25
        case 3:
            return totalAmount * 0.35
        case 4:
            return totalAmount * 0.5
        case 5:
            return 0;
        default:
            return "Invalid lucky number!"
    }
}

console.log(calculateTotal(4, 100));
//  *

//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 5.
//  * (In this line of code, 0 is inclusive, and 6 is exclusive)
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
const luckyNumber = Math.floor(Math.random() * 6);
let totalBill = parseFloat(prompt("What was the total bill?"))
alert(`Your lucky number was ${luckyNumber}, you're total before discount was $${totalBill.toFixed(2)} and you're price after discount was $${parseFloat(calculateTotal(luckyNumber, totalBill))}`)
// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * Do *NOT* display any of the above information
//  * if the user enters a value that is not of the number data type.
//  * Instead, use an alert to inform them of the incorrect input data type.
//  *
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
// //  */
// let enterNumber = confirm("Would you like to enter a number?");
// function weirdQuestion(){
//     if (enterNumber){
//         const randomNumber = prompt("Enter number")
//         if (randomNumber) {
//             let number = parseFloat(randomNumber)
//             const isEven = number % 2 === 0;
//             const plus100 = number + 100;
//             const isPositive = number >=0 ? "positive" : "negative";
//
//             alert(`${isEven} is even`);
//             alert(`${plus100} is plus 100`);
//             alert(`${isPositive} is positive`);
//         } else {
//             alert("Invalid input: Not a number")
//         }
//     }
// }
//
// let randomNumber = prompt(enterNumber)
// if (enterNumber) {
//     weirdQuestion()
// }

let enterNumber = confirm("Would you like to enter a number?");
if (enterNumber) {
    let input = parseFloat(prompt("Enter a number"));
    if (isNaN(input)) {
        alert('Invalid input. Please enter a number');
    } else {
        alert(isEvenOdd(input));
        alert(plus100(input));
        alert(isPosNeg(input));
    }
}

function isEvenOdd(num) {
    if (num % 2 === 0) {
        return `${num} is an even number!`
    } else {
        return `${num} is an odd number!`
    }
}
function plus100 (num) {
    return `${num} + 100 is ${num + 100}`
}

function isPosNeg(num) {
    if (num >= 0) {
        return `${num} is a positive number!`
    } else {
        return `${num} is a negative number!`
    }
}