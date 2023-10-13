"use strict";

// link for exercise
// https://codeup-curriculum.web.app/curriculum/java/3.0.1/javascript-1/javascript-with-html
// https://codeup-curriculum.web.app/curriculum/java/3.0.1/javascript-1/data-types-operators-variables

console.log("Hello from external Javascript");

alert("Welcome to my Website!")
let color = prompt('What is your favorite color?')
alert (`Great, ${color} is my favorite color too!`)


// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?


let moviePrice = 3
let littleMermaid =  parseInt(prompt('How many days do you want to rent The Little Mermaid?'))
let brotherBear = parseInt(prompt('How many days do you want to rent brother Bear?'))
let hercules = parseInt(prompt('How many days do you want to rent Hercules?'))

let totalPrice = (littleMermaid + brotherBear + hercules) * moviePrice

alert(`Your total is $${ totalPrice.toFixed(2) }`)


// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

let googlePay = parseInt(prompt('How many hours did you work for Google?'))
let amazonPay = parseInt(prompt('How many hours did you work for Amazon?'))
let facebookPay = parseInt(prompt('How many hours did you work for Facebook?'))
let totalPay = (googlePay * 400) + (amazonPay * 380) + (facebookPay * 350);
alert(`Your total compensation is $${ totalPay.toFixed(2) }`)

