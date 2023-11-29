const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//**********(.filter)*******
const moreThanThree = users.filter( users => users.languages.length >= 3);
console.log(moreThanThree)

//**********(.map)************
//Example
// const incremented = numbers.map( n => n + 1 );
// console.log(incremented); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const emailStr = users.map(users => users.email);
console.log(emailStr)

//********(.reduce)*********
const totalYearsOfExperience = users.reduce((total, user) => total + user.yearsOfExperience, 0);
const averageYearsOfExperience = totalYearsOfExperience / users.length;
console.log("Total years:", totalYearsOfExperience);
console.log("Average years:", averageYearsOfExperience);

const longestEmail = users.reduce((longest, user) => {
    return user.email.length > longest.length ? user.email : longest;
}, '');
console.log(longestEmail)



const instructorsList = users.reduce((name, user, index) => {
    if (index === user.length - 1) {
        return name + user.name + ", "
    }
    return name + user.name + ", "
}, 'Your instructors are: ');
console.log( instructorsList)



//Example to help you with .reduce
const salesPeople = [
    {name: 'Jim Halpert', sales: 100},
    {name: 'Dwight Schrute', sales: 50},
    {name: 'Andy Bernard', sales: 150},
];
//                                              vv-total of sales vv-each person
const totalSales = salesPeople.reduce((total, person) => {
    return total + person.sales;
}, 0);
// ^^-starting number
console.log(totalSales)