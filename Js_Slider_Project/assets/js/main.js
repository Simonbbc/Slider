'use strict';
let currentPosX = 0;
//index 0 = left swipe
//index 1 = right swipe
const imageTrack = document.querySelector(".slider__track");
//const images = document.querySelectorAll(".slider__image");
//const newImages = images.cloneNode(true);
//const newImageTrack = imageTrack.cloneNode(true);
//document.querySelector(".slider__container").appendChild(newImageTrack);
//console.log(newImages);
function cloneImages() {
    document.querySelectorAll(".slider__image").forEach((element, index) => {
        const newImage = element.cloneNode(true);
        imageTrack.removeChild(element);    
        //imageTrack.appendChild(newImage);
        
    });
}


document.querySelectorAll(".button__swipe").forEach((element, index) => {
    element.addEventListener('click', function () {
        switch(index) {
            case 1:
                imageTrack.style.transform = `translateX(${goRight()}px)`;
                break;
            case 0:
                imageTrack.style.transform = `translateX(${goLeft()}px)`;
                break;
            default:
                imageTrack.style.transform = 'translateX(0px)';
                break;
        }
    });
});

function goRight() {
    if(document.querySelector('.slider__container').getBoundingClientRect().left + document.querySelector('.slider__container').clientWidth === document.querySelector('.slider__track').getBoundingClientRect().right) {
        cloneImages();       
    }
    return currentPosX -= 500;
}

function goLeft() {
    if(document.querySelector('.slider__container').getBoundingClientRect().left === document.querySelector('.slider__track').getBoundingClientRect().left) {
        cloneImages();
    }
    return currentPosX += 500;
}