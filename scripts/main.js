const myImage = document.querySelector('img');

function changeImage() {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/fm-1.jpg') {
        myImage.setAttribute('src', 'images/fm-1-2.jpg');
    } else {
        myImage.setAttribute('src', 'images/fm-1.jpg');
    }
}

myImage.onmouseover = () => {
    changeImage();
}
myImage.onmouseout = () => {
    changeImage();
}
