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
// const largestNum = (input1, input2, input3)=> {
//     if (input1 >=input2 && input1>= input3) {
//         return input1 + " is the greatest number";
//     } else {
//         if (input2 >= input1 && input2 >= input3) {
//             return input2 + " is the greatest number";
//         } else {
//             if (input3 >= input1 && input3 >= input2) {
//                 return input3 + " is the greatest number";
//             }
//         }
//     }
// }
// console.log(largestNum(5, 10, 15));


// 19/10
// Declare a variable named "num" with a value of 100. Using a while loop decrement num by 5 till you reach zero, and console.log("even") for every even number.
// Example output: (95, 90 even, 85, 80 even)

// let num = 100
// while (num  >= 0) {
//     if(num % 2 === 0){
//         console.log(`${num} is even`);
//     }else {
//         console.log(num);
//     }
//     num -= 5
// }

// 20/10
// Create a function that uses a loop that returns all the even numbers between 1 and 100. Console log your function
// function isEven() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 2 === 0) {
//             console.log(`${i} is even`);
//         }
//     }
// }
//
// isEven();

// 23/10
// Create an array of at least 5 of your favorite movies. Create a for each (or a for of loop) to console log all of your movies in alphabetical order
const movies= ["Mollys Game", "Ava", "The Good Nurse", "Memory", "The Harder they Fall"]
movies.sort()
movies.forEach(movie => console.log(movie))

24/10
// Create an array of car objects. each object should have three properties: make, model and color. write a for each or for loop to log each car's make, model and color
const cars = [
    {
        Make: "Toyota",
        model:"Avalon",
        color: "Black"

    },
    {
        Make: "Jeep",
        model:"Wrangler",
        color: "Granite Grey"

    },
    {
        Make: "Rivian",
        model:"SUV",
        color: "White"

    }]
console.log(cars[0].Make)
console.log(cars[0].model)
console.log(cars[0].color)

for (let i = 0; i < cars.length; i++) {
    console.log(`Car ${i + 1}: Make - ${cars[i].Make}, Model - ${cars[i].model}, Color - ${cars[i].color}`);
}

cars.forEach(car => {
    console.log(`Make: ${car.Make}, Model: ${car.model}, Color: ${car.color}`);
});

// 01/11
// Objective: Create a function that takes in an array and returns an array of the names of people who know JavaScript.

    // Data Structure/Example Input:
    let developers = [
        {
            name: "Jonathan",
            languages: {
                frontend: ["HTML", "JavaScript", "CSS"],
                backend: ["Java"]
            }
        },
        {
            name: "Bonnie",
            languages: {
                frontend: ["JavaScript"],
                backend: []
            }
        },
        {
            name: "Raj",
            languages: {
                frontend: [],
                backend: ["C#", "Java", "Python"]
            }
        },
        {
            name: "Carmen",
            languages: {
                frontend: ["JavaScript", "HTML", "CSS", "React"],
                backend: ["C#", "Java", "Python", "TypeScript"]
            }
        }
    ]


function knowsJavaScript(developers) {
    let javascriptDevelopers = [];
    for (let i = 0; i < developers.length; i++) {
        if (developers[i].languages.frontend.includes("JavaScript")) {
            javascriptDevelopers.push(developers[i].name);
        }
    }
    return javascriptDevelopers;
}

console.log(knowsJavaScript(developers));



const knowsJavascript = () => {
    let javaScriptDevs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[j].languages.frontend.length; j++) {
            javaScriptDevs.push(arr[i].name)
        }
    }
    return javaScriptDevs
}
console.log(knowsJavascript(developers));

// 11/10
// Create a function that accepts three arguments (arrOfElements, bgColor, textColor), and returns the array of objects with their corresponding properties changed to the inputted values of bgColor and textColor.

    let elements = [
    {
        el: "button"
        style: {
            backgroundColor: "white",
            color: "black"
        },
        content: "Submit"
    },
    {
        el: "p"
        style: {
            backgroundColor: "white",
            color: "black"
        },
        content: "Our company is better at doing company things than your company."
    },
    {
        el: "h2"
        style: {
            backgroundColor: "white",
            color: "black"
        },
        content: "Welcome Back!"
    }
];
function updateStyles(arrOfElements, bgColor, textColor) {
    let updatedElements = [];
    for (let i = 0; i < arrOfElements.length; i++) {
        let element = arrOfElements[i];
        element.style.backgroundColor = bgColor;
        element.style.color = textColor;
        updatedElements.push(element);
    }
    return updatedElements;
}
function newStyles(arrOfElements, bgColor, textColor) {
    let newElements = [];
    for (let i = 0; i < arrOfElements.length; i++){
        let element = arrOfElements[i];
        bgColor = element.style.backgroundColor
        textColor = element.style.color
    }
    return newElements;
}

// 29/11









