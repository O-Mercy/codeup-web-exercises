"use strict"
// link for exercise
// https://codeup-curriculum.web.app/curriculum/java/3.0.1/javascript-1/loops

// while and do while exercise
 let i = 2
while(i <= 65536) {
    console.log(i)
    i *= 2
}

// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

// This is how you get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;

do {
    let conesBought = Math.floor(Math.random() * 5) + 1;
    console.log(allCones)
    if (conesBought <= allCones) {
        allCones -= conesBought
        console.log(`${conesBought} cones sold`);
    } else {
        console.log(`Cannot sell you ${conesBought} cones. I only have ${allCones}`)
    }
}while (allCones > 0);

console.log("Yay! I sold them all!")

