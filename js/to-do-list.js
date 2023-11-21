//
// const createButton = document.querySelector("#to-do-form");
// const createDiv = (event) => {
//     event.preventDefault()
//     const todoValue = document.querySelector('#to-do').value
//     const newDiv = document.createElement("li");
//     newDiv.classList.add("to-do-item");
//     newDiv.innerHTML = `<p>${todoValue}</p>` +
//         "<button class='btn btn-danger'>Done!</button>";
//     document.querySelector("#to-do-list").appendChild(newDiv);
//     todoValue.innerText.value = "";
// }
// createButton.addEventListener('click', createDiv)
//
//
// const removingEl = document.querySelector(".btn");
// removingEl.addEventListener('click', (e) => {
//     if (e.target.classList.contains('btn btn-danger')){
//         removingEl.remove();
//     }
// })


const form = document.querySelector("#to-do-form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const todo = form.firstElementChild.nextElementSibling.value;

    const todoLi = document.createElement("li");
    todoLi.classList.add("to-do-item", "d-flex", "justify-content-between", "align-items-center");
    todoLi.innerHTML = `<p class="m-0">${todo}</p>\n` +
        "<button class='btn btn-danger'>Click Me!</button>";

    document .getElementById("to-do-list").appendChild(todoLi);

    form.firstElementChild.nextElementSibling.value = "";
})
document.getElementById("to-do-list").addEventListener("click", event =>{

})