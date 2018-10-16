//video preview control

let videoBlock = document.querySelector('.section-main__vid');
let videoInsight = document.querySelector('.section-main__vid iframe');
videoBlock.addEventListener('click', function(event) {
    videoInsight.src += '?autoplay=1';
    setTimeout(function() {
        videoInsight.classList.remove('d-none');
        videoInsight.classList.add('d-block');
        videoBlock.classList.add('playing')
    }, 500)
});

function renderStart() {
    if ($(window).width() >= 1024) {
        var spriteImages    = document.querySelectorAll( '.slide-item__image' );
        var spriteImagesSrc = [];

        for ( var i = 0; i < spriteImages.length; i++ ) {
            var img = spriteImages[i];
            spriteImagesSrc.push( img.getAttribute('src' ) );
        }

        var initCanvasSlideshow = new CanvasSlideshow({
            sprites: spriteImagesSrc,
            // displacementImage: '../img/index/frames/gradient_large.png',
            displacementImage: '../img/dmaps/2048x2048/ripple.jpg',
            // autoPlay: true,
            // autoPlaySpeed: [1, 1],
            displaceScale: [400, 70]
        });
    }
}
renderStart();

function renderStartLitle() {
    if ($(window).width() >= 1024) {
        var spriteImages    = document.querySelectorAll( '.slide-item__image_litle' );
        var spriteImagesSrc = [];

        for ( var i = 0; i < spriteImages.length; i++ ) {
            var img = spriteImages[i];
            spriteImagesSrc.push( img.getAttribute('src' ) );
        }

        var initCanvasSlideshow2 = new CanvasSlideshow({
            sprites: spriteImagesSrc,
            small: true,
            // displacementImage: '../img/index/frames/gradient_large.png',
            displacementImage: '../img/dmaps/2048x2048/ripple.jpg',
            // autoPlay: true,
            // autoPlaySpeed: [1, 1],
            displaceScale: [400, 70]
        });
    }
}
renderStartLitle();