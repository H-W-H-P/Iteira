$(window).ready(function () {
    var boolCount = true;
    var counter = 0;


    $('.index-slider__prev').click(function () {
        if (boolCount) {
            counter--;
            if (counter < 0) counter = 2;
            slideChanging(counter);
        }
    });
    $('.index-slider__next').click(function () {
        if (boolCount) {
            counter++;
            if (counter >= 3) counter = 0;
            slideChanging(counter);
        }
    });


    function slideChanging (counter) {
        $('.index-sliding-fr').removeClass('opacity-true').addClass('opacity-false');
        $('.index-sliding-fr').eq(counter).addClass('opacity-true').removeClass('opacity-false');
        boolCount = false;
        setSlideTimeout(3000);
        $('.numbChange').html(counter + 1);
    }

    function setSlideTimeout (time) {
        setTimeout(function() { 
            boolCount = true;
        }, time);
    }

    var spriteImages    = document.querySelectorAll( '.slide-item__image' );
    var spriteImagesSrc = [];

    for ( var i = 0; i < spriteImages.length; i++ ) {
        var img = spriteImages[i];
        spriteImagesSrc.push( img.getAttribute('src' ) );
    }

    var initCanvasSlideshow = new CanvasSlideshow({
        sprites: spriteImagesSrc,
        displacementImage: '../img/dmaps/2048x2048/clouds.jpg',
        autoPlay: false,
        // autoPlaySpeed: [10, 3],
        displaceScale: [400, 70],
        interactive: true,
        interactionEvent: 'hover'
    });
});