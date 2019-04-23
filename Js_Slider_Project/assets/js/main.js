'use strict';

let currentPosX = 0;
let isEffect = false;
const imageTrack = document.querySelector(".slider__track");
const imageContainer = document.querySelector(".slider__container");
/**
 * Zuerst holen wir uns die Beiden Knöpfe, welche da sind um im Slider zu navigieren (button__swipe).
 * Danach binden wir den Knöpfen einen Click Listener an.
 * Anhand des indexes der beiden Knöpfe können wir dann unterscheiden ob es der Rechte oder Linke Knopf ist,
 * 1 = Rechts, 0 = Links.
 * Danach wird geprüft ob die Variable isEffect true oder false ist.
 * bei true: wird dem HTML element imageTrack die CSS proporties transform und transition gesetzt.
 * bei false: wird dem HTML element imageTrack die CSS proporties transform und transition gesetzt,
 * nur mit dem Unterschied dass die Transform dauer auf 0s ist und nicht auf 0.8s. 
 */
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
/**
 * Wir prüfen ob es das letzte Bild ist im Slider, wenn dies zutrifft wird nichts mit der Variable currentPosX gemacht.
 * Ansonsten wird der currentPosX 500 abgezogen.
 */
function goRight() {
    if(document.querySelector('.slider__container').getBoundingClientRect().left + document.querySelector('.slider__container').clientWidth === document.querySelector('.slider__track').getBoundingClientRect().right) {
        return currentPosX;      
    }
    return currentPosX -= 500;
}
/**
 * Wir prüfen ob es das erste Bild ist im Slider, wenn dies zutrifft wird nichts mit der Variable currentPosX gemacht. 
 * Ansonsten wird der currentPosX 500 dazu gerechnet.
 */
function goLeft() {
    if(document.querySelector('.slider__container').getBoundingClientRect().left === document.querySelector('.slider__track').getBoundingClientRect().left) {
        return currentPosX;
    }
    return currentPosX += 500;
}
/**
 * Zuerst holen wir uns die Beiden Knöpfe, welche für die Effekte zuständig sind (button--effect).
 * Danach binden wir ein Click Listener an die beiden Knöpfe.
 * Durch den Index können wir zwischen den beiden Knöpfen unterscheiden.
 * 0 = Knopf Effekt aktivieren, wenn dieser gedrückt wurde wird die Variable isEffect auf true gesetzt.
 * 1 = Knopf Effekt deaktivieren, wenn dieser gedrückt wurde wird die Variable isEffect auf false gesetzt. 
 */
document.querySelectorAll(".button--effect").forEach((effectButton, index) => {
    effectButton.addEventListener("click", function() {
        switch(index) {
            case 0:
                isEffect = true;
                console.log("effects: ", isEffect)
                break;
            case 1:
                isEffect = false;
                console.log("effects: ", isEffect)
                break;
            default:
                isEffect = false;
                break;
        }
    });
});

document.addEventListener('keyup', function (event) {
    if(event.keyCode === 39) {
        if(isEffect){
            imageTrack.style.transform = `translateX(${goRight()}px)`;
            imageTrack.style.transition = `transform 0.8s ease 0s`;
        } else if(!isEffect) {
            imageTrack.style.transform = `translateX(${goRight()}px)`;
            imageTrack.style.transition = `transform 0s ease 0s`;
        }
    }
    if(event.keyCode === 37) {
        if(isEffect) {
            imageTrack.style.transform = `translateX(${goLeft()}px)`;
            imageTrack.style.transition = `transform 0.8s ease 0s`;
        } else if(!isEffect) {
            imageTrack.style.transform = `translateX(${goLeft()}px)`;
            imageTrack.style.transition = `transform 0s ease 0s`;
        }
    }
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
