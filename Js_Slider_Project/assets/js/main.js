'use strict';

let currentPosX = 0;
let effect = "";
let imageIndex = 0;
const imageTrack = document.querySelector(".slider__track");
const imageContainer = document.querySelector(".slider__container");
const images = document.querySelectorAll(".slider__image");
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
                if(effect.includes("slide")) {
                    imageTrack.style.transform = `translateX(${goRight()}px)`;
                    imageTrack.style.transition = `transform 0.8s ease 0s`;
                    imageIndex += 1;
                } else if (effect.includes("fade")) {
                    if(imageIndex < 4) {
                        images[imageIndex].classList.toggle("slider__image--fade");
                        window.setTimeout(function () {
                            imageTrack.style.transform = `translateX(${goRight()}px)`;
                            imageTrack.style.transition = `transform 0s ease 0s`;
                            imageIndex += 1;
                            images[imageIndex].classList.toggle("slider__image--fade");
                        }, 1800);
                    }
                } else {
                    imageTrack.style.transform = `translateX(${goRight()}px)`;
                    imageTrack.style.transition = `transform 0s ease 0s`;
                    imageIndex += 1;
                }
                break;
            case 0:
                if(effect.includes("slide")) {
                    imageTrack.style.transform = `translateX(${goLeft()}px)`;
                    imageTrack.style.transition = `transform 0.8s ease 0s`;
                    imageIndex -= 1;
                } else if (effect.includes("fade")) {
                    if(imageIndex > 0) {
                        images[imageIndex].classList.toggle("slider__image--fade");
                        window.setTimeout(function () {
                            imageTrack.style.transform = `translateX(${goLeft()}px)`;
                            imageTrack.style.transition = `transform 0s ease 0s`;
                            imageIndex -= 1;
                            images[imageIndex].classList.toggle("slider__image--fade");
                        }, 1800);
                    }
                } else {
                    imageTrack.style.transform = `translateX(${goLeft()}px)`;
                    imageTrack.style.transition = `transform 0s ease 0s`;
                    imageIndex -= 1;
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
                effect = "slide";
                images.forEach((image, index) => {
                    if(image.classList.contains("slider__image--fade")) {   
                        image.classList.remove("slider__image--fade");  
                    }
                });
                console.log(effect);
                break;
            case 1:
                effect = "fade";
                console.log(imageIndex);
                images.forEach((image, index) => {
                    if(index != 0 && index != imageIndex) {   
                        image.classList.toggle("slider__image--fade");  
                    }
                });
                console.log(effect);
                break;
            case 2:
                effect = "";
                images.forEach((image, index) => {
                    if(image.classList.contains("slider__image--fade")) {   
                        image.classList.remove("slider__image--fade");  
                    }
                });
                break;
            default:
                effect = "";
                break;
        }
    });
});

document.addEventListener('keyup', function (event) {
    if(event.keyCode === 39) {
        if(effect.includes("slide")){
            imageTrack.style.transform = `translateX(${goRight()}px)`;
            imageTrack.style.transition = `transform 0.8s ease 0s`;
            imageIndex += 1;
        } else if(effect.includes("fade")) {
            if(imageIndex < 4) {
                images[imageIndex].classList.toggle("slider__image--fade");
                window.setTimeout(function () {
                    imageTrack.style.transform = `translateX(${goRight()}px)`;
                    imageTrack.style.transition = `transform 0s ease 0s`;
                    imageIndex += 1;
                    images[imageIndex].classList.toggle("slider__image--fade");
                }, 1800);
            }
        } else {
            imageTrack.style.transform = `translateX(${goRight()}px)`;
            imageTrack.style.transition = `transform 0s ease 0s`;
            imageIndex += 1;
        }
    }
    if(event.keyCode === 37) {
        if(effect.includes("slide")) {
            imageTrack.style.transform = `translateX(${goLeft()}px)`;
            imageTrack.style.transition = `transform 0.8s ease 0s`;
            imageIndex -= 1;
        } else if(effect.includes("fade")) {
            if(imageIndex > 0) {
                images[imageIndex].classList.toggle("slider__image--fade");
                window.setTimeout(function () {
                    imageTrack.style.transform = `translateX(${goLeft()}px)`;
                    imageTrack.style.transition = `transform 0s ease 0s`;
                    imageIndex -= 1;
                    images[imageIndex].classList.toggle("slider__image--fade");
                }, 1800);
            }
        } else {
            imageTrack.style.transform = `translateX(${goLeft()}px)`;
            imageTrack.style.transition = `transform 0s ease 0s`;
            imageIndex -= 1;
        }
    }
});
