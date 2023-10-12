let a = 1;
console.log(a);
// a = 1

let b = a++;
console.log(b);
// b = 1

let c = ++a;
console.log(c);
// c = 3
// what is the value of a, b, and c?

let d = "hello";
let e = false;

d++;
e++;
// d = NaN
// e = 0

let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
// perplexed = NaN

let price = 2.7;
price.toFixed(2);
// price = 2.70

let price = "2.7";
price.toFixed(2);
// price = NaN

isNaN(0)
// false
isNaN(1)
// false
isNaN("")
// false??
isNaN("string")
// true
isNaN("0")
//false
isNaN("1")
//false
isNaN("3.145")
//false
isNaN(Number.MAX_VALUE)
// false
isNaN(Infinity)
//false??
isNaN("true")
//true
isNaN(true)
// false??
isNaN("false")
// true
isNaN(false)
//false??
// to illustrate why the isNaN() function is needed:
NaN == NaN
// true

!true
// false
!false
//true
!!true
// true
!!false
// false
!!0
// false
!!-0
// false
!!1
// true
!!-1
// true
!!0.1
// true
!!"hello"
// true
!!""
// false
!!''
// false
!!"false"
// true
!!"0"
// true

let sample = "Hello Codeup";
// console.log(sample.length);
// 12
// sample.toLowerCase()
// sample.toUpperCase()
// let sample = "Hello " + "Codeup " + "Students"
// sample.replace("Students", "Class")
// sample.indexOf("c") is -1
// sample.indexOf("C") is 6
