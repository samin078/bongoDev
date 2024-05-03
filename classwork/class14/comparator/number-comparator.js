const num1Input = document.getElementById('number1');
const num2Input = document.getElementById('number2');
const compareButton = document.getElementById('compare');
const result = document.getElementById('result');

compareButton.addEventListener('click', function() {
    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);

    if(num1 === num2) {
        result.innerText = "Equal";
    }
    else if(num1 > num2) {
        result.innerText = "Number1 is greater than Number2";
    }
    else {
        result.innerText = "Number1 less than Number2";
    }
    
});
