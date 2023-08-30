// const u = document.getElementById("callForm")
// // u.addEventListener("submit", function(event) {
// //     event.preventDefault();

// //     const formData = new FormData(event.target);
// //     const formObject = {};

// //     formData.forEach((value, key) => {
// //         formObject[key] = value;
// //     });

// //     console.log("submit => ",formObject);
// // });

// // u.addEventListener("click", function(event) {
// //     event.preventDefault();
// //     console.log("click => ",event.target);
// // });

// // u.addEventListener("mouseover", function(event) {
// //     event.preventDefault();
// //     console.log("mourseover => ",event.target);
// // });

// // u.addEventListener("mouseout", function(event) {
// //     event.preventDefault();

// //     console.log("mouseout => ",event.target);
// // });

// // const title = document.getElementById('main-header')
// // title.style.border = 'solid 10px black'

// // const addItem = document.querySelector('.title')
// // addItem.style.fontWeight = 'bold'
// // addItem.style.color = 'green'

// // const listelement = document.querySelector('.list-group-item:nth-child(2)')
// // listelement.style.background = 'green'

// // const list = document.querySelectorAll('.list-group-item')

// // list.forEach(l => {
// //     l.style.fontWeight = 'bold'
// // })
// // list.style.fontWeight = 'bold'

// // const newLi = document.createElement("li");
// // newLi.textContent = "New Item";
// // newLi.className = "list-group-item new-item";

// // const ul = document.querySelector(".items");
// // ul.appendChild(newLi);

// // const itemsWithClass = document.getElementsByClassName("new-item");
// // if (itemsWithClass.length > 0) {
// //     itemsWithClass[0].textContent = "Edited with getElementsByClassName";
// // }

// // const listItems = document.getElementsByTagName("li");
// // for (const item of listItems) {
// //     if (item.classList.contains("new-item")) {
// //         item.textContent = "Edited with getElementsByTagName";
// //         break;
// //     }
// // }

// //-------------------- fift commit---------------------------------------

// // const secondItem = document.querySelector("#items li:nth-child(2)");
// // secondItem.style.backgroundColor = "green";

// // // Make the 3rd item invisible
// // const thirdItem = document.querySelector("#items li:nth-child(3)");
// // thirdItem.style.display = "none";

// // const oddItems = document.querySelectorAll("#items li:nth-child(odd)");
// // oddItems.forEach(item => {
// //     item.style.backgroundColor = "green";
// // });

const mainHeader = document.getElementById("main-header");
console.log("Parent Element:", mainHeader);

const lastItem = document.getElementById("items").lastElementChild;
console.log("Last Element Child:", lastItem);

const lastChild = document.getElementById("items").lastChild;
console.log("Last Child:", lastChild);

const newItem = document.createElement("li");
newItem.className = "list-group-item";
newItem.textContent = "New Item";
document.getElementById("items").appendChild(newItem);

const firstElementChild = document.getElementById("main").firstElementChild;
console.log("First Element Child:", firstElementChild);

const firstChild = document.getElementById("main").firstChild;
console.log("First Child:", firstChild);

const nextSibling = document.getElementById("header-title").nextSibling;
console.log("Next Sibling:", nextSibling);

const nextElementSibling =
  document.getElementById("header-title").nextElementSibling;
console.log("Next Element Sibling:", nextElementSibling);

const previousSibling = mainHeader.previousSibling;
console.log("Previous Sibling:", previousSibling);

const previousElementSibling = mainHeader.previousElementSibling;
console.log("Previous Element Sibling:", previousElementSibling);

const newDiv = document.createElement("div");
newDiv.setAttribute("class", "new-div");
console.log("New Div Element:", newDiv);

const newText = document.createTextNode("This is a new text node.");
console.log("New Text Node:", newText);

document.getElementById("main").appendChild(newDiv);

const mainHeaderReader = document.getElementById("main-header");
const helloBeforeHeader = document.createElement("span");
helloBeforeHeader.textContent = "Hello ";
mainHeaderReader.insertBefore(helloBeforeHeader, mainHeaderReader.firstChild);

const firstItem = document.querySelector("#items li:first-child");
const helloBeforeFirstItem = document.createElement("span");
helloBeforeFirstItem.textContent = "Hello ";
firstItem.insertBefore(helloBeforeFirstItem, firstItem.firstChild);
