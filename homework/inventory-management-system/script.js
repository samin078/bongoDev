// Initial products array
const initialProducts = [
  {
    ID: 1,
    name: 'Laptop',
    quantity: 10,
    price: 800,
    vendor: 'Dell',
    category: 'Electronics',
  },
  {
    ID: 2,
    name: 'Phone',
    quantity: 25,
    price: 500,
    vendor: 'Samsung',
    category: 'Electronics',
  },
  {
    ID: 3,
    name: 'Desk Chair',
    quantity: 15,
    price: 150,
    vendor: 'Ikea',
    category: 'Furniture',
  },
];

let id = initialProducts.length + 1;

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


function addCell(index, newRow, value) {
  let newCell = newRow.insertCell(index);
  newCell.classList.add('text-center');
  newCell.innerHTML = value;
  return newCell;
}

function editButtonClick(index) {
  const formRef = document.getElementById("productForm");

  formRef.productId.value = initialProducts[index].ID;
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
  formRef.productId.value = '';
  formRef.productName.value = '';
  formRef.productPrice.value = '';
  formRef.productQuantity.value = '';
  formRef.productVendor.value = '';
  formRef.productCategory.value = '';
}

function newProductEntry() {

  const productId = document.getElementById('productId').value;
  const productName = document.getElementById('productName').value;
  const productQuantity = document.getElementById('productQuantity').value;
  const productPrice = document.getElementById('productPrice').value;
  const productVendor = document.getElementById('productVendor').value;
  const productCategory = document.getElementById('productCategory').value;


  if(productId > 0){
    initialProducts[productId-1]= {
      ID: productId,
      name: productName,
      quantity: productQuantity,
      price: productPrice,
      vendor: productVendor,
      category: productCategory
    };
  }
  else{
    initialProducts.push({
      ID: id++,
      name: productName,
      quantity: productQuantity,
      price: productPrice,
      vendor: productVendor,
      category: productCategory
    });
  }

  clearForm("productForm");
  addRow("productTableBody");
}

addRow("productTableBody");

const submitBtn = document.getElementById('submitBtn');
// const myForm = document.getElementById('productForm');

submitBtn.addEventListener('click' , function(e){
  e.preventDefault();
  newProductEntry();
});