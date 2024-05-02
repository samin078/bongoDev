const numInput = document.getElementById('number');
const calculateButton = document.getElementById('calculate');
const result = document.getElementById('result');

calculateButton.addEventListener('click', function() {
    const num = parseInt(numInput.value);

    if(num > 100 || num < 0) {
        result.innerText = "Invalid Marks";
    }
    else if(num >=80 && num <=100) {
        result.innerText = "A";
    }
    else if(num >=70 && num < 80) {
        result.innerText = "B";
    }
    else if(num >=60 && num < 70) {
        result.innerText = "C";
    }
    else if(num >=50 && num < 60) {
        result.innerText = "D";
    }
    else {
        result.innerText = "F";
    }

    console.log(num);
});
