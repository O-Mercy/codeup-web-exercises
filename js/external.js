"use strict";

console.log("Hello from external Javascript");

alert("Welcome to my Website!")
let color = prompt('What is your favorite color?')
alert (`Great, ${color} is my favorite color too!`)



alert('You have rented some movies for your kids: The little mermaid , Brother Bear, and Hercules ,they love it!');

let moviePrice = 3
let littleMermaid =  parseInt(prompt('How many days have you rented The Little Mermaid?'))
let brotherBear = parseInt(prompt('How many days have you rented brother Bear?'))
let hercules = parseInt(prompt('How many days have you rented Hercules?'))

let totalPrice = (littleMermaid + brotherBear + hercules) * moviePrice

alert(`Your total is $${totalPrice}`)


// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
let googlePay = parseInt(prompt('How many hours did you work for Google?'))
let amazonPay = parseInt(prompt('How many hours did you work for Amazon?'))
let facebookPay = parseInt(prompt('How many hours did you work for Facebook?'))
let totalPay = (googlePay * 400) + (amazonPay * 380) + (facebookPay * 350);
alert(`Your total compensation is ${totalPay}`)
// let googlePay = 400 * 6
// let amazon = 380 * 4
// let facebook = 350 * 10
// console.log (google + amazon + facebook);
