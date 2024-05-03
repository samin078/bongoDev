const numberInput = document.getElementById('input-number');
const generateButton = document.getElementById('generate');
const tableContainer = document.getElementById('table-container');

generateButton.addEventListener('click', function () {
  const number = parseInt(numberInput.value);

  tableContainer.innerHTML = '';

  for (let i = 1; i <= 10; i++) {
    const tableRow = document.createElement('h4');
    tableRow.innerText = `${number} * ${i} = ${number * i}`;

    tableContainer.appendChild(tableRow);
  }
});
