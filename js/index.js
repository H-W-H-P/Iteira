//slider-index control
let indexSliderCounter = 1;
let indexSliderCounterInner = document.querySelector('.index-slider-counter-num__is');
let indexSliderPrev = document.querySelector('.index-slider__prev');
let indexSliderNext = document.querySelector('.index-slider__next');
let indexSliderFrames = document.querySelectorAll('.index-sliding-fr');
let indexSliderArrows = document.querySelectorAll('.index-slider__arrow');
let indexSocial = document.querySelectorAll('.social a');
let indexSliderDashes = document.querySelectorAll('.index-slider__dash, .index-slider-counter__dash');
let logo = document.querySelector('.logo');
let whitePages = document.querySelectorAll('[data-theme="dark"]')

let all = document.querySelectorAll('*');
let indexSliderHandler = function(event) {
    indexSliderNext.removeEventListener('click', indexSliderHandler);
    indexSliderPrev.removeEventListener('click', indexSliderHandler);
    indexSliderFrames[indexSliderCounter - 1].classList.add('opacity-false');
    indexSliderFrames[indexSliderCounter - 1].classList.remove('opacity-true');
    if (event.target == indexSliderPrev) {
        indexSliderCounter--;
        if (indexSliderCounter == 0) {
            indexSliderCounter = indexSliderFrames.length;
        };
    } else {
        indexSliderCounter++;
        if (indexSliderCounter == indexSliderFrames.length + 1) {
            indexSliderCounter = 1;
        };
    }
    for (let j = 0; j < whitePages.length; j++) {
        if (indexSliderFrames[indexSliderCounter - 1] == whitePages[j]) {
            for (let i = 0; i < all.length; i++) {
                all[i].classList.add('white-theme');
            }
            document.querySelector('.a-tan').classList.remove('white-theme');
            for (let i = 0; i < indexSliderArrows.length; i++) {
                indexSliderArrows[i].classList.add('white-theme-arrows');
            }
            indexSocial[0].classList.add('white-theme-insta');
            indexSocial[1].classList.add('white-theme-tel');
            for (let i = 0; i < indexSliderDashes.length; i++) {
                indexSliderDashes[i].classList.add('white-theme-dashes');
            }
            logo.classList.add('white-theme-logo');
            j = whitePages.length;
        } else {
            for (let i = 0; i < all.length; i++) {
                try {
                    all[i].classList.remove('white-theme');
                } catch {};
            }
            for (let i = 0; i < indexSliderArrows.length; i++) {
                try {
                    indexSliderArrows[i].classList.remove('white-theme-arrows');
                } catch {};
            }
            try {
                indexSocial[0].classList.remove('white-theme-insta');
                indexSocial[1].classList.remove('white-theme-tel');
                logo.classList.remove('white-theme-logo');
            } catch {};
            for (let i = 0; i < indexSliderDashes.length; i++) {
                try {
                    indexSliderDashes[i].classList.remove('white-theme-dashes');
                } catch {};
            }
        }
    }

    indexSliderCounterInner.innerHTML = '0' + indexSliderCounter;
    indexSliderFrames[indexSliderCounter - 1].classList.remove('opacity-false');
    indexSliderFrames[indexSliderCounter - 1].classList.add('opacity-true');
    indexSliderPrev.addEventListener('click', indexSliderHandler);
    indexSliderNext.addEventListener('click', indexSliderHandler);
}
indexSliderPrev.addEventListener('click', indexSliderHandler);
indexSliderNext.addEventListener('click', indexSliderHandler);