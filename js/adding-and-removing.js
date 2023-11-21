// CREATE A NEW ELEMENT

// document.createElement(<element tag name>);

// adding a <p>
const myNewP = document.createElement("p");
myNewP.innerText = "I'm a new paragraph!";
myNewP.id = "myNewP";
myNewP.classList.add("fs-2", "fw-bold", "text-center");
document.querySelector("#newContent").appendChild(myNewP);


// REMOVE AN ELEMENT

// <parent element>.removeChild(<child element to remove>)

// adding another <p>
const myOtherP = document.createElement("p");
myOtherP.innerText = "I'm a paragraph too!";
myOtherP.classList.add("text-center");
document.querySelector("#newContent").appendChild(myOtherP);

// remove the new <p>
document.querySelector("#newContent").removeChild(myOtherP);

// In order to retain a reference to the paragraph, so that it can be put back if necessary, we could store a reference to it in a variable:
const thatOtherP = document.querySelector("#newContent").removeChild(myOtherP);
document.querySelector("#newContent").appendChild(thatOtherP);

// or use the remove method
thatOtherP.remove();


// REPLACING ONE ELEMENT WITH ANOTHER ELEMENT

// <parent element>.replaceChild(<new child>, <old child>)

// replace myNewP with myAwesomeP
const myAwesomeP = document.createElement("p");
myAwesomeP.innerText = "I'm an EVEN BETTER paragraph";
myAwesomeP.classList.add("fs-1", "text-center");
document.querySelector("#newContent").replaceChild(myAwesomeP, myNewP);

// storing the new element in a new variable and calling that variable in our reference
// const newContent = document.querySelector("#newContent");
//
// const myNewP = document.createElement("p");
// myNewP.innerText = "I'm a new paragraph!";
// myNewP.id = "myNewP";
// myNewP.classList.add("fs-2", "fw-bold", "text-center");
// newContent.appendChild(myNewP);
//
// const myOtherP = document.createElement("p");
// myOtherP.innerText = "I'm a paragraph too!";
// myOtherP.classList.add("text-center");
// newContent.appendChild(myOtherP);
//
// const thatOtherP = document.querySelector("#newContent").removeChild(myOtherP);
// newContent.appendChild(thatOtherP);
//
// const sweetP = document.createElement("p");
// sweetP.innerText = "I am the sweetest paragraph!";
// sweetP.classList.add("text-center");
// newContent.appendChild(sweetP);
//
// sweetP.remove();
//
// const myAwesomeP = document.createElement("p");
// myAwesomeP.innerText = "I'm an EVEN BETTER paragraph";
// myAwesomeP.classList.add("fs-1", "text-center");
// newContent.replaceChild(myAwesomeP, myNewP);




// ADDING ELEMENTS AT SPECIFIC PLACES IN THE DOM

// If we want to be more specific about where we place a new element, we can use the before() and after() methods.

// before() method.
// putting something in between two and three
const three = document.querySelector("#three");

const twoAndAHalf = document.createElement("li");
twoAndAHalf.innerText = "Two and a half";
three.before(twoAndAHalf);

// after() method
// putting something in between three and four

// PREVENTING THE BROWSER DEFAULT
// get references to the to-do input and its parent form
const toDoInput = document.querySelector("#to-do");
const toDoForm = toDoInput.parentElement;

// declare a callback to handle the user input
// const handleUserInput = () => {
//     console.log(toDoInput.value);
// }

// output user input to the DOM
toDoForm.addEventListener('submit', handleUserInput);

// To prevent the browser's default behavior, we can use the prefentDefault() method on the event object.
const handleUserInput = (event) => {
    event.preventDefault();
    console.log(toDoInput.value);
    toDoInput.value = '';
}


// Adding Event Listeners to Dynamically Created Elements

// obtain reference to the button that will trigger div creation
const createButton = document.querySelector("#create-a-div");
// function to create new divs
// within each div there is a button with the class `event-trigger`
const createDiv = () => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("dynamic-div");
    newDiv.innerHTML = "<p>I'm a new div!</p>" +
        "<button class='event-trigger'>Click Me!</button>";
    document.querySelector("#new-div-section").appendChild(newDiv);
    // add event handler to button
    newDiv.lastChild.addEventListener('click', () => console.log('Clicked!'));
}
// add the click handler to the button
createButton.addEventListener('click', createDiv);


// event-trigger class:
const newDivSection = document.querySelector("#new-div-section");
newDivSection.addEventListener('click', (e)=>{
    if (e.target.classList.contains('event-trigger')){
        console.log('Clicked!');
    }
});