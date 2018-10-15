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

        if ($('.index-sliding-fr.index-sliding-fr-wh').hasClass('opacity-true'))  {
            $('.index-slider').addClass('white-tem');
            $('.index-slider-counter').addClass('white-tem');
            $('.copyright').addClass('white-tem');
        } else {
            $('.index-slider').removeClass('white-tem');
            $('.index-slider-counter').removeClass('white-tem');
            $('.copyright').removeClass('white-tem');
        }      

        if ($(window).width() > 1024) {
            setTimeout(function() { 
                $('body').removeClass('white');
                if ($('.opacity-true[data-theme="dark"]').length) {
                    $('body').addClass('white');
                }
            }, 1000);
            boolCount = false;
            setSlideTimeout(3000);
        }
        if ($(window).width() < 1024) {
            $('body').removeClass('white');
            if ($('.opacity-true[data-theme="dark"]').length) {
                $('body').addClass('white');
            }
        }
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
        // displacementImage: '../img/index/frames/gradient_large.png',
        displacementImage: '../img/dmaps/2048x2048/ripple.jpg',
        // autoPlay: true,
        // autoPlaySpeed: [1, 1],
        displaceScale: [30, 30]
    });

    $('#itc-widget-btn').addClass('social__tel');
});