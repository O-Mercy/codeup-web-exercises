"use strict"

// link for exercise
// https://codeup-curriculum.web.app/curriculum/java/3.0.1/javascript-1/loops
function showMultiplicationTable(number) {
    for (let num = 0; num <= 10; num++) {
            console.log(`(${num} * ${number}) = ${num * number}`);
    }
}
showMultiplicationTable(5);



    // For generating random numbers within a range using Math.random(), follow the steps below:
    // Declare the minimum value of the range
    // Declare the maximum value of the range
    // Use the formula Math.floor(Math.random() *(max - min + 1) + min) to generate values with the min and the max value inclusive.

    for (let i = 0; i < 10; i++) {
        let randomNo = Math.floor(Math.random() *((200 - 20) + 1) + 20)
        if (randomNo % 2 === 0) {
            console.log(`${randomNo} is even`);
        } else {
            console.log(`${randomNo} is odd`);
        }
}




for (let i = 1; i <= 9; i++) {
    console.log(`${i}`.repeat(i))
}


for (let i = 100; i > 0; i-=5) {
    console.log(`${i}`);
}

// let oddNumber = parseFloat(prompt("Enter odd number between 1 and 50"))
// for(let i = 0; i < 50; i++){
//     if(i % 2 !== 0)
//         console.log(`${i} is odd`)
//     else if(i % 2 === 0)
//         break;
//     // break stops at the condition
//     // console.log(`Snippet will never be reached`);
// }
