
let items = [];


function addItem() {
  // Get input values
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const price = parseFloat(document.getElementById('price').value);
  const quantity = parseInt(document.getElementById('quantity').value);

 
  const newItem = {
    name,
    description,
    price,
    quantity,
  };

  
  items.push(newItem);


  document.getElementById('name').value = '';
  document.getElementById('description').value = '';
  document.getElementById('price').value = '';
  document.getElementById('quantity').value = '';

 
  updateItemList();

  
  storeItemInApi(newItem);
}


function storeItemInApi(item) {
  axios.post('https://crudcrud.com/api/821adec004154bd79ecf1205843acfe4/stor', item)
    .then(function (response) {
    
    })
    .catch(function (error) {
     
      console.error('Error Storing Data in API:', error);
    });
}


function retrieveData() {
  axios.get('https://crudcrud.com/api/821adec004154bd79ecf1205843acfe4/stor')
    .then(function (response) {
    //   console.log(' Data from API:', response.data);
      items = response.data;
      updateItemList();
    })
    .catch(function (error) {
     
      console.error('Error Retrieving Data from API:', error);
    });
}

function updateItemList() {
  const itemList = document.getElementById('Item-list');

  
  itemList.innerHTML = '';


  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `
      <strong>Name:</strong> ${item.name} | 
      <strong>Description:</strong> ${item.description} | 
      <strong>Price:</strong> $${item.price.toFixed(2)} | 
      <strong>Quantity:</strong> ${item.quantity}
      <button class="btn btn-primary btn-sm mx-2" onclick="buyOne(${index})">Buy One</button>
      <button class="btn btn-primary btn-sm mx-2" onclick="buyTwo(${index})">Buy Two</button>
      <button class="btn btn-primary btn-sm mx-2" onclick="buyThree(${index})">Buy Three</button>
    `;
    itemList.appendChild(li);
  });
}


function buyOne(index) {
  if (items[index].quantity >= 1) {
    items[index].quantity -= 1;
    updateItemList();
    console.log("value => ",items[index])
    updateItemInAPI(items[index]._id,items[index] );
  
  }
}


function buyTwo(index) {
  if (items[index].quantity >= 2) {
    items[index].quantity -= 2;
    updateItemList();
    console.log("value => ",items[index].quantity)
    updateItemInAPI(items[index]._id,items[index] );
  
  }
}


 function buyThree(index) {
  if (items[index].quantity >= 3) {
    items[index].quantity -= 3;
    updateItemList();
    console.log("value => ",items[index].quantity)
     updateItemInAPI(items[index]._id,items[index] );
  
  }
}

// Function to update an item in the API
 function updateItemInAPI(itemId, updatedData) {
     axios.put(`https://crudcrud.com/api/821adec004154bd79ecf1205843acfe4/store/${itemId}`, updatedData)
      .then(function (response) {
      
        console.log('Updated Data in API:', response.data);
        
      })
      .catch(function (error) {
       
        console.error('Error Updating Data in API:', error);
      });
  }

// to load data from the API
retrieveData();
