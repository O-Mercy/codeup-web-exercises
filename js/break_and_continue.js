"use strict"

while(true) {
    let oddNumber = parseInt(prompt("Enter odd number between 1 and 50"));

    if (oddNumber >= 1 && oddNumber <= 50 && oddNumber % 2 === 1) {
        console.log(`Number entered is ${oddNumber}`);
        for (let i = 1; i <= 50; i += 2) {
            if (i === oddNumber) {
                console.log(`Yikes! Skipping number ${oddNumber}`);
                continue;
            }
            console.log(`Here is an odd number ${i}`)
        }
        break;
    } else {
        alert(`Invalid input. Please enter a odd number between 1 and 50`)
    }
}
