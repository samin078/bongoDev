const scoreInput = document.getElementById('number');
const calculateButton = document.getElementById('calculate');
const result = document.getElementById('result');


function setResultText(text) {
    result.innerText = text;
}

function setInvalidState() {
    scoreInput.style.border = '1px solid red';
    setResultText("Invalid Marks");
}

calculateButton.addEventListener('click', function() {
    if(scoreInput.value === '') {
        setInvalidState();
        return;
    }


    const score= parseInt(scoreInput.value);
    let displayText = "";

    if(score> 100 || score< 0) {
        setInvalidState();
        displayText = "Invalid Marks";
    }
    else if(score>=80 && score<=100) {
        displayText = "A";
    }
    else if(score>=70 && score< 80) {
        displayText = "B";
    }
    else if(score>=60 && score< 70) {
        displayText = "C";
    }
    else if(score>=50 && score< 60) {
        displayText = "D";
    }
    else {
        displayText = "F";
    }
    setResultText(displayText);
});
