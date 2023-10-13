// link for exercise
// https://codeup-curriculum.web.app/curriculum/java/3.0.1/javascript-1/data-types-operators-variables
// let a = 1;
// console.log(a);
// // a = 1
//
// let b = a++;
// console.log(b);
// // b = 1
//
// let c = ++a;
// console.log(c);
// // c = 3
// // what is the value of a, b, and c?
//
// let d = "hello";
// let e = false;
//
// d++;
// e++;
// d = NaN
// e = 0

// let perplexed; // perplexed is undefined (no value is assigned)
// perplexed + 2;
// perplexed = NaN

// let price = 2.7;
// price.toFixed(2);
// price = 2.70

// let price = "2.7";
// price.toFixed(2);
// price = NaN
// to fix this use parseInt.toFixed(2)
// parseInt removes the first number in a string.

// isNaN(0)
// // false
// isNaN(1)
// // false 1 is a number
// isNaN("")
// // false?? empty string is NaN
// isNaN("string")
// // true string is NaN
// isNaN("0")
// //false content inside the string is a number
// isNaN("1")
// //false content inside the string is a number
// isNaN("3.145")
// //false content inside the string is a number
// isNaN(Number.MAX_VALUE)
// // false
// isNaN(Infinity)
// //false?? infinity is a number
// isNaN("true")
// //true string
// isNaN(true)
// // false?? boolean
// isNaN("false")
// // true string
// isNaN(false)
// //false?? false is a falsey value
// // to illustrate why the isNaN() function is needed:
// NaN == NaN
// // true
//
// !true
// false
// !false
// //true
// !!true
// // true
// !!false
// // false
// !!0
// // false
// !!-0
// // false
// !!1
// // true
// !!-1
// // true
// !!0.1
// // true
// !!"hello"
// // true
// !!""
// // false
// !!''
// // false
// !!"false"
// // true
// !!"0"
// // true

// No of characters in the string
let sample = "Hello Codeup";
console.log(sample.length);
// 12

// to Lowercase
console.log(sample.toLowerCase());

// to Uppercase
console.log(sample.toUpperCase());

// concatenate sample to add Students
sample += "Students"
sample = sample + "Students"
// shorthand operator (+=)
console.log(sample);

// replace students with class
console.log(sample.replace("Students", "Class"));

// Index of ("c")
console.log(sample.indexOf("c"));
// Index does not exist returns -1

// index of "C"
console.log(sample.indexOf("C"));
// Index of C is 6

// retrieving 'Codeup' substring
console.log(sample.substring(6, 12));
// another solution
console.log(sample.substring(sample.indexOf("C"), 1 + sample.indexOf("p")));


let moviePrice = 3
let littleMermaid =  moviePrice * 3
let brotherBear = moviePrice * 5
let hercules = moviePrice * 1

console.log(littleMermaid + brotherBear + hercules)

let google = 400 * 6
let amazon = 380 * 4
let facebook = 350 * 10
console.log (google + amazon + facebook);


let username = 'codeup';
let password = 'notastrongpassword';

console.log(password.length);
let passwordLength = password.length >= 5
console.log(passwordLength);
let passWord = password !== username
console.log(passWord);
let userName =username.length >= 20
console.log(userName);
let whiteSpace = (username.trim() == username) && (password.trim() == password)
console.log(whiteSpace);


