// // Mercy Osugo
// // Daily Warm-ups
// var name = 'Mercy Osugo'
// var year = '2015'
// console.log("My name is " + name + " and i graduated high school in " + year);

// 16/10
// Create a function named "capitalizedFirstLetter" that takes in a string, and returns the string with the first letter in uppercase.
function capitalizedFirstLetter(string) {
    string = 'hello World'
    return string[0].toUpperCase() + string.slice(1);
}

console.log(capitalizedFirstLetter());
//string [0].toUppercase returns the first letter capitalized.
//string.slice(1) retains the original form of the string.
// .slice - returns a new array containing a portion of the array on which it is implemented. The original remains unchanged.


// Substring method
// const capitalizeFirstLetter = (str) => {
//     let firstLetter = str.substring(0, 1);
//     let capitalizedFirstLetter = firstLetter.toUpperCase();
//     let restOfWord = str.substring(1);
//
//     return capitalizedFirstLetter + restOfWord;
//
// }

// function capitalizeFirstLetter(str) {
//     let firstLetter = str.substring(0, 1);
//     let capitalizedFirstLetter = firstLetter.toUpperCase();
//     let restOfWord = str.substring(1);
//
//     return capitalizedFirstLetter + restOfWord;
// }

const capitalizeFirstLetter = str => str.substring(0,1).toUpperCase() + str.substring(1);

console.log(capitalizeFirstLetter("5"));