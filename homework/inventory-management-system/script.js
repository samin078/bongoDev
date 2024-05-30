// Initial products array
const initialProducts = [
  {
    name: 'Laptop',
    quantity: 10,
    price: 800,
    vendor: 'Dell',
    category: 'Electronics',
  },
  {
    name: 'Phone',
    quantity: 25,
    price: 500,
    vendor: 'Samsung',
    category: 'Electronics',
  },
  {
    name: 'Desk Chair',
    quantity: 15,
    price: 150,
    vendor: 'Ikea',
    category: 'Furniture',
  },
];

// Function to render products
function renderProducts(products) {
  addRow("productTableBody");
}

function addRow(tableID) {

  const tableRef = document.getElementById(tableID);
  clearTable("productTableBody");
  initialProducts.forEach(function (product, index) {
    const newRow = tableRef.insertRow(-1);

    const newCell1 = addCell(0, newRow, product.name);
    const newCell2 = addCell(1, newRow, product.quantity);
    const newCell3 = addCell(2, newRow, product.price);
    const newCell4 = addCell(3, newRow, product.vendor);
    const newCell5 = addCell(4, newRow, product.category);


    newDiv = document.createElement('div');
    newDiv.className = 'flex justify-center align-center';

    editButton = document.createElement('button');
    editButton.className = 'bg-green-500 text-white p-2 rounded mx-2';
    editButton.innerText='Edit';
    editButton.addEventListener('click', () => editButtonClick(index));

    deleteButton = document.createElement('button');  
    deleteButton.className = 'bg-red-500 text-white p-2 rounded mx-2';
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => deleteButtonClick(index));

    const newCell6 = newRow.insertCell(5);
    newDiv.appendChild(editButton);
    newDiv.appendChild(deleteButton);
    newCell6.appendChild(newDiv);

  });
}

function addRow2(tableID) {

  const tableRef = document.getElementById(tableID);
  clearTable("productTableBody");
  initialProducts.forEach(function (product) {
    const newRow = document.createElement('tr');

    const newCell1 = document.createElement('td');
    newCell1.innerText = product[0];

    const newCell2 = document.createElement('td');
    newCell2.innerText = product.quantity;

    const newCell3 = document.createElement('td');
    newCell3.innerText = product.price;

    const newCell4 = document.createElement('td');
    newCell4.innerText = product.vendor;

    const newCell5 = document.createElement('td');
    newCell5.innerText = product.category;


    newRow.appendChild(newCell1);
    newRow.appendChild(newCell2);
    newRow.appendChild(newCell3);
    newRow.appendChild(newCell4);
    newRow.appendChild(newCell5);
    
    // const newCell6 = newRow.insertCell(5).innerHTML =
    // '<button class="align-center bg-green-500 text-white p-2 rounded mx-6" onclick="editData(this)">Edit</button>' +
    //     '<button class="align-center bg-red-500 text-white p-2 rounded mx-6" onclick="deleteData(this)">Delete</button>';
  
    // newDiv = document.createElement('div');
    // editButton = document.createElement('button');
    // deleteButton = document.createElement('button');
    // editButton.classList.add('bg-green-500 text-white p-2 rounded mx-2');
    // deleteButton.classList.add('bg-red-500 text-white p-2 rounded mx-2');
    // editButton.innerHTML='Edit';
    // const newCell6 = newRow.insertCell(5);
    // newDiv.appendChild(editButton);
    // newCell6.appendChild(editButton);
    
    // newCell6.appendChild(deleteButton);
    tableRef.appendChild(newRow);
  });
}

function addCell(index, newRow, value) {
  let newCell = newRow.insertCell(index);
  newCell.classList.add('text-center');
  newCell.innerHTML = value;
  return newCell;
}

function editButtonClick(index) {
  const formRef = document.getElementById("productForm");

  formRef.productName.value = initialProducts[index].name;
  formRef.productPrice.value = initialProducts[index].price;
  formRef.productQuantity.value = initialProducts[index].quantity;
  formRef.productVendor.value = initialProducts[index].vendor;
  formRef.productCategory.value = initialProducts[index].category;

}

function deleteButtonClick(index) {
  initialProducts.splice(index, 1);
  addRow("productTableBody");
}

function clearTable(tableID) {
  const tableRef = document.getElementById(tableID);
  tableRef.innerHTML ='';
}

function clearForm(formID) {
  const formRef = document.getElementById(formID);
  formRef.productName.value = '';
  formRef.productPrice.value = '';
  formRef.productQuantity.value = '';
  formRef.productVendor.value = '';
  formRef.productCategory.value = '';
}

function newProductEntry() {

  const productName = document.getElementById('productName').value;
  const productQuantity = document.getElementById('productQuantity').value;
  const productPrice = document.getElementById('productPrice').value;
  const productVendor = document.getElementById('productVendor').value;
  const productCategory = document.getElementById('productCategory').value;

  let idx = -1;
  initialProducts.forEach(function (product, index) {
    if(product.name === productName){
      idx = index;
    }
  });
  if(idx != -1){
    initialProducts[idx]= {
      name: productName,
      quantity: productQuantity,
      price: productPrice,
      vendor: productVendor,
      category: productCategory
    };
  }
  else{
    initialProducts.push({
      name: productName,
      quantity: productQuantity,
      price: productPrice,
      vendor: productVendor,
      category: productCategory
    });
  }

  console.log(initialProducts);
  clearForm("productForm");
  addRow("productTableBody");
  
  
}

addRow("productTableBody");

const submitBtn = document.getElementById('submitBtn');
const myForm = document.getElementById('productForm');

submitBtn.addEventListener('click' , function(e){
  e.preventDefault();
  newProductEntry();
  
});