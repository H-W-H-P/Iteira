//menu handler

let subheader = document.querySelectorAll('.service-menu__subheader');
let content = document.querySelectorAll('.service-content-wrapper');
let table = document.querySelectorAll('.service-content');
let dash = document.querySelectorAll('.service-menu__subheader .service-menu__dash:first-of-type');
let wrappedContent = document.querySelectorAll('.wrapped-content');
let tableCells = document.querySelectorAll('td');
let curSub = null;
let curContent = null;
let curI = null;
let subheaderHandler;
let arr = [];
mobileDesktopMenuHandler = function() {
    if (window.innerWidth < 1024) {
        for (let i = 0; i < subheader.length; i++) {
            content[i].style.maxHeight = '0px'
            content[i].classList.add('desktop-opened');
            content[i].classList.add('desktop-opacity');
            subheader[i].classList.remove('desktop-chosen');
            dash[i].classList.remove('dash-rotate');
        }
        curI ? dash[curI].classList.add('dash-rotate') : dash[0].classList.add('dash-rotate');
        if (curSub) {
            curContent.style.maxHeight = 'calc(' + window.getComputedStyle(table[curI]).height + ' - 30px)';
        }
        subheaderHandler = function(i, event) {
            if (curSub && curSub != subheader[i]) {
                curContent.style.maxHeight = '0px';
            }
            if (!(curSub == subheader[i] && content[i].style.maxHeight != '0px')) {
                content[i].style.maxHeight = 'calc(' + window.getComputedStyle(table[i]).height + ' - 30px)';
            } else {
                content[i].style.maxHeight = '0px';
            }
            curI ? dash[curI].classList.remove('dash-rotate') : dash[0].classList.remove('dash-rotate');
            dash[i].classList.add('dash-rotate');
            curSub = subheader[i];
            curContent = content[i];
            curI = i;
        }
    } else {
        if (!curSub) {
            curSub = subheader[0];
            curContent = content[0];
            curI = 0;
        }
        for (let i = 0; i < subheader.length; i++) {
            content[i].style.maxHeight = 'calc(80vh - 130px)';
            dash[i].classList.remove('dash-rotate');
            content[i].classList.remove('desktop-opened');
            content[i].classList.remove('desktop-opacity');
            subheader[i].classList.remove('desktop-chosen');
        }
        curI ? dash[curI].classList.add('dash-rotate') : dash[0].classList.add('dash-rotate');
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
                dash[curI].classList.remove('dash-rotate');
                dash[i].classList.add('dash-rotate');
                curSub = subheader[i];
                curContent = content[i];
                curI = i;
            }
        }
    }
    for (let i = 0; i < subheader.length; i++) {
        if (arr[i]) {
            subheader[i].removeEventListener('click', arr[i]);
        }
        arr[i] = subheaderHandler.bind(null, i);
        subheader[i].addEventListener('click', arr[i]);
    }
}

mobileDesktopMenuHandler();

window.addEventListener('resize', mobileDesktopMenuHandler);

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
    }


});
sliderNext.addEventListener('click', () => {
    if (curI < arr.length - 1) {
        arr[curI + 1]();
    }
    subheader[curI].scrollIntoView(false);
});

//wrapping content
for (let i = 0; i < tableCells.length; i++) {
    tableCells[i].addEventListener('click', function() {
        for (let i = 0; i < wrappedContent.length; i++)
            if (this.contains(wrappedContent[i])) {
                wrappedContent[i].classList.contains('wrapped-content') ? wrappedContent[i].classList.remove('wrapped-content') : wrappedContent[i].classList.add('wrapped-content');
            }
    });
}