const generateButton = document.getElementById('generate');
const tableGrid = document.getElementById('table-grid');

generateButton.addEventListener('click', function () {

  for (let i = 1; i <= 10; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.margin = '22px';

    for (let j = 1; j <= 10; j++) {
      const tableRow = document.createElement('h2');
      tableRow.innerText = `${i} * ${j} = ${i * j}`;
      newDiv.appendChild(tableRow);
    }
    tableGrid.append(newDiv);
  }

});
