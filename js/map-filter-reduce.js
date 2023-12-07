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
// // TODO 1. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const threePlusLang = users.filter(userLang=> userLang.languages.length >= 3 );

console.log(threePlusLang)

// // TODO  2. Use .map to create an array of strings where each element is a user's email address
const emailAd = users.map(user => user.email);
//
console.log(emailAd)

// // TODO 3. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const yearsEx = users.reduce((total, user) =>
{
  return  total + user.yearsOfExperience;
}, 0)
const average = yearsEx / users.length;
console.log(average)
//
// // TODO 4. Use .reduce to get the longest email from the list of users.
const longestEm = emailAd.reduce((longest, email) => {
    if(email.length > longest.length ){
        return email
    }else{
        return longest
    }
}, "");
console.log(longestEm)
//
// // TODO 5. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
//
let instructors = users.reduce(function(output, user, currentIndex){
    if(currentIndex === users.length -1){
        return `${output} ${user.name}.`
    }
    return `${output} ${user.name},`;
}, "Your instructors are:")