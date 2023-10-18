"use strict"

// let i = 0;
//
// while (i <= 10) {
//     console.log(i);
//     i++
// }
//
// do while loop
// let i = 0;
// //
// // while (i <= 10) {
// //     console.log(i);
// //     i++
// // }
// //
// // DO WHILE LOOPS
// // let i = 12;
// //
// // do{
// //     console.log(i);
// //     i++
// // } while (i < 10)
// //
// // if browser/ computer stuck on infinite loop to exit
// // do (Command + Option + Esc)
// // or shutdown your computer using the physical buttons
// let i = 12;
//
// do{
//     console.log(i);
//     i++
// } while (i < 10)
//
// if browser/ computer stuck on infinite loop
// to exit
// do (Command + Option + Esc)
// or shutdown your computer using the physical button
// Create a variable called num that is equal to 0
//write a while loop that increment "num" by 5 so long as num is less than 100
//do the same thing with a do-while

// let num = 0;
// while(num < 100){
//      console.log(num)
//     num += 5
// }
//
//
// do{
//     // console.log(num);    value of num is 0
//     // num += 5   happens after the console.log
// } while (num < 100);


const secretNumber = 7
let guess;
let attempt = 0;

//do while loop
do {
    guess = parseInt(prompt("Guess the secret number (1-10):"));
    attempt++
    if (guess === secretNumber) {
        console.log("You have guessed the lucky number")
    } else {
        if(guess < secretNumber) {
            console.log("Try a higher number");
        } else {
            console.log("Try a lower number");
        }
        console.log(`You suck at guessing!! ${attempt} total attempt`);
    }
}while (guess !== secretNumber)