let cnt = 0;

counter = document.getElementById('counter');

function inc(){
    if(cnt<10)
        cnt++;
    else 
        alert("Count can't be more than 10");
    counter.innerText = cnt;
}

function dec(){
    if(cnt>0)
        cnt--;
    else 
        alert("Count can't be negative");
    counter.innerText = cnt;
}

function getIncButtonElement() {
    const button = document.getElementById('increment');
    return button;
}

function getDecButtonElement() {
    const button = document.getElementById('decrement');
    return button;
}



getIncButtonElement().addEventListener('click', inc);
getDecButtonElement().addEventListener('click', dec);

console.log(cnt);