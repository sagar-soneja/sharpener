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

const title = document.getElementById('main-header')
title.style.border = 'solid 10px black'


const addItem = document.querySelector('.title')
addItem.style.fontWeight = 'bold'
addItem.style.color = 'green'

const listelement = document.querySelector('.list-group-item:nth-child(2)')
listelement.style.background = 'green'

const list = document.querySelectorAll('.list-group-item')

list.forEach(l => {
    l.style.fontWeight = 'bold'
})
list.style.fontWeight = 'bold'