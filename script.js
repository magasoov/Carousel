const wrapperOne = document.querySelector('.wrapper-1');
const leftButton = document.querySelector('.carousel-left');
const rightButton = document.querySelector('.carousel-right');
const leftButtonSmall = document.querySelector('.carousel-left-small');
const rightButtonSmall = document.querySelector('.carousel-right-small');
const imageContainer = document.querySelector('.image-container');

let track = 0;

let counter = 1;

const moveImagesLeft = function () {
    if (counter < imageContainer.childElementCount) {
        counter++;
        track = track - 100;
        wrapperOne.style.marginLeft = `${track}%`;
    }
}

const moveImagesRight = function () {
    if (counter > 1) {
        counter--;
        track = track + 100;
        wrapperOne.style.marginLeft = `${track}%`;
    }
}

rightButton.addEventListener('click', () => {
    moveImagesLeft();
});

rightButtonSmall.addEventListener('click', () => {
    moveImagesLeft();
});

leftButton.addEventListener('click', () => {
    moveImagesRight();
});

leftButtonSmall.addEventListener('click', () => {
    moveImagesRight();
});// Hello World