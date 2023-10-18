// // // Mercy Osugo
// // // Daily Warm-ups
// // var name = 'Mercy Osugo'
// // var year = '2015'
// // console.log("My name is " + name + " and i graduated high school in " + year);
//
// // 16/10
// // Create a function named "capitalizedFirstLetter" that takes in a string, and returns the string with the first letter in uppercase.
// function capitalizedFirstLetter(string) {
//     string = 'hello World'
//     return string[0].toUpperCase() + string.slice(1);
// }
//
// console.log(capitalizedFirstLetter());
// //string [0].toUppercase returns the first letter capitalized.
// //string.slice(1) retains the original form of the string.
// // .slice - returns a new array containing a portion of the array on which it is implemented. The original remains unchanged.
//
//
// // Substring method
// // const capitalizeFirstLetter = (str) => {
// //     let firstLetter = str.substring(0, 1);
// //     let capitalizedFirstLetter = firstLetter.toUpperCase();
// //     let restOfWord = str.substring(1);
// //
// //     return capitalizedFirstLetter + restOfWord;
// //
// // }
//
// // function capitalizeFirstLetter(str) {
// //     let firstLetter = str.substring(0, 1);
// //     let capitalizedFirstLetter = firstLetter.toUpperCase();
// //     let restOfWord = str.substring(1);
// //
// //     return capitalizedFirstLetter + restOfWord;
// // }
//
// const capitalizeFirstLetter = str => str.substring(0,1).toUpperCase() + str.substring(1);
//
// console.log(capitalizeFirstLetter("5"));

// 17/10
// Create a function named "largestNum" that takes in three numbers as input and returns the largest of the
// three.
// Example Output:
// largestNum (5, 10, 15)// returns 15
// largestNum (3, 2, 1) // returns 3

// Solution using ternary operator.
// function largestNum(a, b, c) {
//     return c >(a > b ? a : b) ? c :((a > b) ? a : b);

// }
// Solution using if/else
const largestNum = (input1, input2, input3)=> {
    if (input1 >=input2 && input1>= input3) {
        return input1 + " is the greatest number";
    } else {
        if (input2 >= input1 && input2 >= input3) {
            return input2 + " is the greatest number";
        } else {
            if (input3 >= input1 && input3 >= input2) {
                return input3 + " is the greatest number";
            }
        }
    }
}
console.log(largestNum(5, 10, 15));


