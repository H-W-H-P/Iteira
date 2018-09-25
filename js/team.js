//menu handler

let subheader = document.querySelectorAll('.service-menu__subheader');
let content = document.querySelectorAll('.service-content-wrapper');
let table = document.querySelectorAll('.service-content');
let curSub = null;
let curContent = null;
let curI = null;
let subheaderHandler;
let arr = [];

if (!curSub) {
    curSub = subheader[0];
    curContent = content[0];
    curI = 0;
}
for (let i = 0; i < subheader.length; i++) {
    content[i].style.maxHeight = '100%';
    content[i].classList.remove('desktop-opened');
    content[i].classList.remove('desktop-opacity');
    subheader[i].classList.remove('desktop-chosen');
}
curSub.classList.add('desktop-chosen');
curContent.classList.add('desktop-opened');
curContent.classList.add('desktop-opacity');
subheaderHandler = function(i, event) {
    if (curSub != subheader[i]) {
        curSub.classList.remove('desktop-chosen');
        curContent.classList.remove('desktop-opacity');
        backupCurContent = curContent;
        setTimeout(() => {
            backupCurContent.classList.remove('desktop-opened');
        }, 1000);
        subheader[i].classList.add('desktop-chosen');
        content[i].classList.add('desktop-opened');
        backupContent = content[i];
        setTimeout(() => {
            backupContent.classList.add('desktop-opacity');
        }, 40)
        curSub = subheader[i];
        curContent = content[i];
        curI = i;
    }
}

for (let i = 0; i < subheader.length; i++) {
    subheader[i].removeEventListener('click', arr[i]);
    arr[i] = subheaderHandler.bind(null, i);
    subheader[i].addEventListener('click', arr[i]);
}
////team-menu handler



//slider handler

let sliderNext = document.querySelector('.index-slider__next');
let sliderPrev = document.querySelector('.index-slider__prev');
let menu = document.querySelector('.service-menu');
sliderPrev.addEventListener('click', () => {
    if (curI > 0) {
        arr[curI - 1]();
        if (subheader[curI].getBoundingClientRect().top < menu.getBoundingClientRect().top + 10) {
            subheader[curI].scrollIntoView();
        }
    } else {
        arr[arr.length - 1]();
        subheader[curI].scrollIntoView(false);

    }
    if (curI <= 1) {
        subheader[curI].scrollIntoView(false);
    }


});
sliderNext.addEventListener('click', () => {
    if (curI < arr.length - 1) {
        arr[curI + 1]();
    } else {
        arr[0]();
    }
    subheader[curI].scrollIntoView(false);
});

//mobile menu handler

let menuMobileElems = document.querySelectorAll('.team-menu .team-menu__subheader');
let menuMobileNum = 0;
let menuMarginVW = 50;
let menuMarginPX = 0;
let menuSliderSet = function(num) {
    let menuMarginPXArr = getComputedStyle(menuMobileElems[num]).width.split('');
    menuMarginPXArr.pop();
    menuMarginPXArr.pop();
    menuMarginPX += +menuMarginPXArr.join('') + 40;
}
let menuSliderChange = function() {
    for (let i = 0; i < menuMobileElems.length; i++) {
        menuMobileElems[i].style.transform = 'translate(calc(' + menuMarginVW + 'vw - ' + menuMarginPX + 'px))';
    }
}
menuSliderSet(0);
menuMarginPX = menuMarginPX / 2;
menuSliderChange();