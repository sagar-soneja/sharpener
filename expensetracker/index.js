// Function to add an expense to local storage
// link - https://crudcrud.com/api/00ad57946e1d44739a8f5e2bc33507c1/exptrac
// async function addExpense() {
//   const amount = parseFloat(document.getElementById("amount").value);
//   const description = document.getElementById("description").value;
//   const category = document.getElementById("category").value;

//   if (isNaN(amount) || amount <= 0) {
//     alert("Please enter a valid amount.");
//     return;
//   }

//   const expenseData = {
//     amount,
//     description,
//     category,
//   };

//   const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
//   expenses.push({ [description]: expenseData });

  
//   localStorage.setItem("expenses", JSON.stringify(expenses));
//   await axios.post('https://crudcrud.com/api/00ad57946e1d44739a8f5e2bc33507c1/exptrac',expenseData)

//   document.getElementById("amount").value = "";
//   document.getElementById("description").value = "";
//   document.getElementById("category").value = "Food";

//   displayExpenses();
// }

// // function to display exprenses 
// async function displayExpenses() {
//   const expenseList = document.getElementById("expense-list");
//   expenseList.innerHTML = "";
//   const data = await axios.get('https://crudcrud.com/api/00ad57946e1d44739a8f5e2bc33507c1/exptrac').then(res => res).catch(err => console.log(err))
// console.log(data[0].expenses)
//   const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

//   for (const expense of expenses) {
//     for (const key in expense) {
//       const expenseData = expense[key];

//       const listItem = document.createElement("li");
//       listItem.className = "list-group-item m";

//       listItem.textContent = `Description: ${key}, Amount: $${expenseData.amount}, Category: ${expenseData.category}`;

//       const editButton = document.createElement("button");
//       editButton.textContent = "Edit";
//       editButton.className = "btn btn-warning me-2 ml-2";
//       editButton.onclick = () => editExpense(key);

//       const deleteButton = document.createElement("button");
//       deleteButton.textContent = "Delete";
//       deleteButton.className = "btn btn-danger ml-2";
//       deleteButton.onclick = () => deleteExpense(key);

//       const buttonGroup = document.createElement("div");
//       buttonGroup.className = "btn-group";
//       buttonGroup.appendChild(editButton);
//       buttonGroup.appendChild(deleteButton);

//       listItem.appendChild(buttonGroup);
//       expenseList.appendChild(listItem);
//     }
//   }
// }

// // Function to edit an expense
// function editExpense(description) {
//   const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

//   for (let i = 0; i < expenses.length; i++) {
//     const expense = expenses[i];
//     if (expense.hasOwnProperty(description)) {
     
//       const expenseData = expense[description];
//       document.getElementById("amount").value = expenseData.amount;
//       document.getElementById("description").value = description;
//       document.getElementById("category").value = expenseData.category;

 
//       expenses.splice(i, 1);
//       localStorage.setItem("expenses", JSON.stringify(expenses));
//       displayExpenses();
//       break;
//     }
//   }
// }

// // Function to delete an expense
// function deleteExpense(description) {
//   const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

//   for (let i = 0; i < expenses.length; i++) {
//     const expense = expenses[i];
//     if (expense.hasOwnProperty(description)) {
//       expenses.splice(i, 1);
//       localStorage.setItem("expenses", JSON.stringify(expenses));
//       displayExpenses();
//       break;
//     }
//   }
// }

// // Display existing expenses on page load
// displayExpenses();


// async function addExpense() {
//   const amount = parseFloat(document.getElementById("amount").value);
//   const description = document.getElementById("description").value;
//   const category = document.getElementById("category").value;

//   if (isNaN(amount) || amount <= 0) {
//     alert("Please enter a valid amount.");
//     return;
//   }

//   const expenseData = {
//     amount,
//     description,
//     category,
//   };

//   try {
//     await axios.post('https://crudcrud.com/api/00ad57946e1d44739a8f5e2bc33507c1/exptrac', expenseData);
//     document.getElementById("amount").value = "";
//     document.getElementById("description").value = "";
//     document.getElementById("category").value = "Food";
//     displayExpenses();
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function displayExpenses() {
//   const expenseList = document.getElementById("expense-list");
//   expenseList.innerHTML = "";

//   try {
//     const response = await axios.get('https://crudcrud.com/api/00ad57946e1d44739a8f5e2bc33507c1/exptrac');
//     // console.log(response.data)
//     const expenses = response.data|| [];

//     for (const key in expenses) {
//       const expenseData = expenses[key];

//       const listItem = document.createElement("li");
//       listItem.className = "list-group-item m";

//       listItem.textContent = `Description: ${key}, Amount: $${expenseData.amount}, Category: ${expenseData.category}`;

//       const editButton = document.createElement("button");
//       editButton.textContent = "Edit";
//       editButton.className = "btn btn-warning me-2 ml-2";
//       editButton.onclick = () => editExpense(key);

//       const deleteButton = document.createElement("button");
//       deleteButton.textContent = "Delete";
//       deleteButton.className = "btn btn-danger ml-2";
//       deleteButton.onclick = () => deleteExpense(key);

//       const buttonGroup = document.createElement("div");
//       buttonGroup.className = "btn-group";
//       buttonGroup.appendChild(editButton);
//       buttonGroup.appendChild(deleteButton);

//       listItem.appendChild(buttonGroup);
//       expenseList.appendChild(listItem);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function editExpense(description) {
//   try {
//     const response = await axios.get('https://crudcrud.com/api/00ad57946e1d44739a8f5e2bc33507c1/exptrac');
//     const expenses = response.data || [];

//     if (expenses.hasOwnProperty(description)) {
//       const expenseData = expenses[description];
//       document.getElementById("amount").value = expenseData.amount;
//       document.getElementById("description").value = description;
//       document.getElementById("category").value = expenseData.category;

//       delete expenses[description];
//       await axios.put('https://crudcrud.com/api/00ad57946e1d44739a8f5e2bc33507c1/exptrac', { expenses });
//       displayExpenses();
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function deleteExpense(description) {
//   try {
//     const response = await axios.get('https://crudcrud.com/api/00ad57946e1d44739a8f5e2bc33507c1/exptrac');
//     const expenses = response.data || [];

//     if (expenses.hasOwnProperty(description)) {
//       delete expenses[description];
//       await axios.put('https://crudcrud.com/api/00ad57946e1d44739a8f5e2bc33507c1/exptrac', { expenses });
//       displayExpenses();
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// // Display existing expenses on page load
// displayExpenses();

async function addExpense() {
  const amount = parseFloat(document.getElementById("amount").value);
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  const expenseData = {
    amount,
    description,
    category,
  };

  try {
    await axios.post('https://crudcrud.com/api/00ad57946e1d44739a8f5e2bc33507c1/exptrac', expenseData);
    document.getElementById("amount").value = "";
    document.getElementById("description").value = "";
    document.getElementById("category").value = "Food";
    displayExpenses();
  } catch (err) {
    console.log(err);
  }
}

async function displayExpenses() {
  const expenseList = document.getElementById("expense-list");
  expenseList.innerHTML = "";

  try {
    const response = await axios.get('https://crudcrud.com/api/00ad57946e1d44739a8f5e2bc33507c1/exptrac');
    const expenses = response.data || [];

    expenses.forEach((expense) => {
      const { _id, amount, description, category } = expense;

      const listItem = document.createElement("li");
      listItem.className = "list-group-item m";

      listItem.textContent = `Description: ${description}, Amount: $${amount}, Category: ${category}`;

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.className = "btn btn-warning me-2 ml-2";
      editButton.onclick = () => editExpense(_id);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "btn btn-danger ml-2";
      deleteButton.onclick = () => deleteExpense(_id);

      const buttonGroup = document.createElement("div");
      buttonGroup.className = "btn-group";
      buttonGroup.appendChild(editButton);
      buttonGroup.appendChild(deleteButton);

      listItem.appendChild(buttonGroup);
      expenseList.appendChild(listItem);
    });
  } catch (err) {
    console.log(err);
  }
}

async function editExpense(id) {
  try {
    const response = await axios.get(`https://crudcrud.com/api/00ad57946e1d44739a8f5e2bc33507c1/exptrac/${id}`);
    const expenseData = response.data;

    document.getElementById("amount").value = expenseData.amount;
    document.getElementById("description").value = expenseData.description;
    document.getElementById("category").value = expenseData.category;

    // Implement your edit logic here and then update the expense
    // For example:
    // expenseData.amount = updatedAmount;
    // expenseData.description = updatedDescription;
    // expenseData.category = updatedCategory;

    await axios.delete(`https://crudcrud.com/api/00ad57946e1d44739a8f5e2bc33507c1/exptrac/${id}`);
    displayExpenses();
  } catch (err) {
    console.log(err);
  }
}

async function deleteExpense(id) {
  try {
    await axios.delete(`https://crudcrud.com/api/00ad57946e1d44739a8f5e2bc33507c1/exptrac/${id}`);
    displayExpenses();
  } catch (err) {
    console.log(err);
  }
}

// Display existing expenses on page load
displayExpenses();
