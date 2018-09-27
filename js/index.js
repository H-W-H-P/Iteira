$(window).ready(function () {
    var counter = 0;
    $('.index-slider__prev').click(function () {
        counter--;
        if (counter < 0) counter = 2;
        slideChanging(counter);
    });
    $('.index-slider__next').click(function () {
        counter++;
        if (counter >= 3) counter = 0;
        slideChanging(counter);
    });

    function slideChanging(counter) {
        console.log(counter)
        $('.index-sliding-fr').removeClass('opacity-true').addClass('opacity-false');
        $('.index-sliding-fr').eq(counter).addClass('opacity-true').removeClass('opacity-false');
    }
});