const u = document.getElementById("callForm")
// u.addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     const formData = new FormData(event.target);
//     const formObject = {};
    
//     formData.forEach((value, key) => {
//         formObject[key] = value;
//     });
    
//     console.log("submit => ",formObject);
// });


// u.addEventListener("click", function(event) {
//     event.preventDefault();
//     console.log("click => ",event.target);
// });

// u.addEventListener("mouseover", function(event) {
//     event.preventDefault();
//     console.log("mourseover => ",event.target);
// });

// u.addEventListener("mouseout", function(event) {
//     event.preventDefault();
    
    
//     console.log("mouseout => ",event.target);
// });

// const title = document.getElementById('main-header')
// title.style.border = 'solid 10px black'


// const addItem = document.querySelector('.title')
// addItem.style.fontWeight = 'bold'
// addItem.style.color = 'green'

// const listelement = document.querySelector('.list-group-item:nth-child(2)')
// listelement.style.background = 'green'

// const list = document.querySelectorAll('.list-group-item')

// list.forEach(l => {
//     l.style.fontWeight = 'bold'
// })
// list.style.fontWeight = 'bold'




// const newLi = document.createElement("li");
// newLi.textContent = "New Item";
// newLi.className = "list-group-item new-item"; 


// const ul = document.querySelector(".items");
// ul.appendChild(newLi);


// const itemsWithClass = document.getElementsByClassName("new-item");
// if (itemsWithClass.length > 0) {
//     itemsWithClass[0].textContent = "Edited with getElementsByClassName";
// }


// const listItems = document.getElementsByTagName("li");
// for (const item of listItems) {
//     if (item.classList.contains("new-item")) {
//         item.textContent = "Edited with getElementsByTagName";
//         break; 
//     }
// }


//-------------------- fift commit---------------------------------------


const secondItem = document.querySelector("#items li:nth-child(2)");
secondItem.style.backgroundColor = "green";

// Make the 3rd item invisible
const thirdItem = document.querySelector("#items li:nth-child(3)");
thirdItem.style.display = "none";




const oddItems = document.querySelectorAll("#items li:nth-child(odd)");
oddItems.forEach(item => {
    item.style.backgroundColor = "green";
});