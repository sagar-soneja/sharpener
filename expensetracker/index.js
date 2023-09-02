// Function to add an expense to local storage
function addExpense() {
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

  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses.push({ [description]: expenseData });
  localStorage.setItem("expenses", JSON.stringify(expenses));

  document.getElementById("amount").value = "";
  document.getElementById("description").value = "";
  document.getElementById("category").value = "Food";

  displayExpenses();
}

// function to display exprenses 
function displayExpenses() {
  const expenseList = document.getElementById("expense-list");
  expenseList.innerHTML = "";

  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  for (const expense of expenses) {
    for (const key in expense) {
      const expenseData = expense[key];

      const listItem = document.createElement("li");
      listItem.className = "list-group-item m";

      listItem.textContent = `Description: ${key}, Amount: $${expenseData.amount}, Category: ${expenseData.category}`;

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.className = "btn btn-warning me-2 ml-2";
      editButton.onclick = () => editExpense(key);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "btn btn-danger ml-2";
      deleteButton.onclick = () => deleteExpense(key);

      const buttonGroup = document.createElement("div");
      buttonGroup.className = "btn-group";
      buttonGroup.appendChild(editButton);
      buttonGroup.appendChild(deleteButton);

      listItem.appendChild(buttonGroup);
      expenseList.appendChild(listItem);
    }
  }
}

// Function to edit an expense
function editExpense(description) {
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    if (expense.hasOwnProperty(description)) {
     
      const expenseData = expense[description];
      document.getElementById("amount").value = expenseData.amount;
      document.getElementById("description").value = description;
      document.getElementById("category").value = expenseData.category;

 
      expenses.splice(i, 1);
      localStorage.setItem("expenses", JSON.stringify(expenses));
      displayExpenses();
      break;
    }
  }
}

// Function to delete an expense
function deleteExpense(description) {
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    if (expense.hasOwnProperty(description)) {
      expenses.splice(i, 1);
      localStorage.setItem("expenses", JSON.stringify(expenses));
      displayExpenses();
      break;
    }
  }
}

// Display existing expenses on page load
displayExpenses();
