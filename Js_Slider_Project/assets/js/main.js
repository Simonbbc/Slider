'use strict';
let currentPosX = 0;
let isEffect = false;
const imageTrack = document.querySelector(".slider__track");

document.querySelectorAll(".button__swipe").forEach((swiperButton, index) => {
    swiperButton.addEventListener('click', function () {
        switch(index) {
            case 1:
                if(isEffect) {
                    imageTrack.style.transform = `translateX(${goRight()}px)`;
                    imageTrack.style.transition = `transform 0.8s ease 0s`;
                } else if (!isEffect) {
                    imageTrack.style.transform = `translateX(${goRight()}px)`;
                    imageTrack.style.transition = `transform 0s ease 0s`;
                }
                break;
            case 0:
                if(isEffect) {
                    imageTrack.style.transform = `translateX(${goLeft()}px)`;
                    imageTrack.style.transition = `transform 0.8s ease 0s`;
                } else if (!isEffect) {
                    imageTrack.style.transform = `translateX(${goLeft()}px)`;
                    imageTrack.style.transition = `transform 0s ease 0s`;
                }
                break;
            default:
                imageTrack.style.transform = 'translateX(0px)';
                break;
        }
    });
});

function goRight() {
    if(document.querySelector('.slider__container').getBoundingClientRect().left + document.querySelector('.slider__container').clientWidth === document.querySelector('.slider__track').getBoundingClientRect().right) {
        return currentPosX;      
    }
    return currentPosX -= 500;
}

function goLeft() {
    if(document.querySelector('.slider__container').getBoundingClientRect().left === document.querySelector('.slider__track').getBoundingClientRect().left) {
        return currentPosX;
    }
    return currentPosX += 500;
}


document.querySelectorAll(".button--effect").forEach((effectButton, index) => {
    effectButton.addEventListener("click", function() {
        switch(index) {
            case 0:
                isEffect = true;
                console.log("effect yes: ", isEffect)
                break;
            case 1:
                isEffect = false;
                console.log("effect no: ", isEffect)
                break;
            default:
                isEffect = false;
                break;
        }
    });
});


/**
 * Tests wie CloneNode() Funktion angewendet wird.
index 0 = left swipe
index 1 = right swipe
const images = document.querySelectorAll(".slider__image");
const newImages = images.cloneNode(true);
const newImageTrack = imageTrack.cloneNode(true);
document.querySelector(".slider__container").appendChild(newImageTrack);
console.log(newImages);
function cloneImages() {
    document.querySelectorAll(".slider__image").forEach((element, index) => {
        // const newImage = element.cloneNode(true);
        // imageTrack.removeChild(element);    
        //imageTrack.appendChild(newImage);
        
    });
} 
 */
