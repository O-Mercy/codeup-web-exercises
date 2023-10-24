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

//
// const secretNumber = 7
// let guess;
// let attempt = 0;
//
// DO WHILE LOOP
// do {
//     guess = parseInt(prompt("Guess the secret number (1-10):"));
//     attempt++
//     if (guess === secretNumber) {
//         console.log("You have guessed the lucky number")
//     } else {
//         if(guess < secretNumber) {
//             console.log("Try a higher number");
//         } else {
//             console.log("Try a lower number");
//         }
//         console.log(`You suck at guessing!! ${attempt} total attempt`);
//     }
// }while (guess !== secretNumber)


// FOR LOOPS
//for (/*initialization*/; /*condition*/; /*increment*/) {
//    // body
// }
for(let i = 10; i <=20; i++) {
    console.log(i);
}

for(let i = 0; i < 100; i +=5) {
    console.log(i);
}

let hello = "hello";
for(let i = 0; i <= hello.length; i++) {
    console.log(hello.charAt(i));
    // console.log(hello[i]);
}

for(let i = 0, j = 10; i <= 10; i++, j--){
    console.log(`for loop iteration # i = ${i}, j = ${j}`);
    // "j" stops when "i" stops, there is no condition for 'j' the only condition is for 'i'; i <=10
}


// Break
for(let i = 0; i < 100; i += 5 ){
    console.log(i)
    break;
    // break stops at the condition
    // console.log(`Snippet will never be reached`);
}

for(let i = 0; i < 100; i += 5 ){
    console.log(i)
    if(i === 50){
        break;
    }
}

// CONTINUE
for(let i = 1; i <= 5; i++) {
    if(i === 3) {
        continue;
        // continue skips the condition
    }
    console.log(i);
}

for(let i = 1; i <100; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(`Here is an odd number ${i}`);
}
// this will skip all the even numbers and only show results for odd numbers

for(let i = 1; i <100; i++) {
    if (i % 2 === 0) {
        break;
        // this will stop at the first even number
    }
    console.log(`Here is an even number ${i}`);
}

for (let i = 1; i < 100; i++) {

    if (i % 2 !== 0) {
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration
        continue;
    }

    console.log(i);
}
