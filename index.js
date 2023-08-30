const u = document.getElementById("callForm")
u.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const formObject = {};
    
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    console.log("submit => ",formObject);
});


u.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("click => ",event.target);
});

u.addEventListener("mouseover", function(event) {
    event.preventDefault();
    console.log("mourseover => ",event.target);
});

u.addEventListener("mouseout", function(event) {
    event.preventDefault();
    
    
    console.log("mouseout => ",event.target);
});