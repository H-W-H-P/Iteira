//mobile menu popup

let html = document.querySelector('html');
let menuButton = document.querySelector('.nav-menu');
let menuPopup = document.querySelector('.menu-popup');
let closure = document.querySelector('.closure');

closure.addEventListener('click', function(event) {
    event.preventDefault();
    menuPopup.classList.remove('opened');
    menuPopup.classList.add('closed');
    html.style.overflowY = 'visible';
});

menuButton.addEventListener('click', function(event) {
    event.preventDefault();
    menuPopup.classList.remove('closed');
    menuPopup.classList.add('opened');
    html.style.overflowY = 'hidden';
});