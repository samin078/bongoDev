function getButtonElement() {
    const button = document.getElementById('btn');
    return button;
}

function getImageElement() {
    const image = document.getElementById('img');
    return image;
}

function updateButtonText(buttonText) {
    getButtonElement().innerText = buttonText;
}

function updateImage(image) {
    getImageElement().src = image;
}

updateButtonText('click me');

let c = 0;
function updateButtonTextWithClick() {
    if (c % 2 == 0) {
        console.log('Button is clicked');
        updateButtonText('hehe');
        updateImage('images/cat_3.jpg')
        c = 1;
    }
    else {
        console.log('Button is clicked');
        updateButtonText('click me');
        updateImage('images/cat_2.jpg')
        c = 0;
    }

}

getButtonElement().addEventListener('click', updateButtonTextWithClick);

