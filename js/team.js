// $(document).ready(function () {
//     var dataCounter = 0;

//     let owlMobNav = $('.owl-carousel.team-menu-mobile').owlCarousel({
//         margin:10,
//         nav: false,
//         items: 1
//     });

//     $('.sliderCatCh').click(function () {
//         dataCounter = $(this).data('counter');
//         sliding(dataCounter);
//     });

//     $('.index-slider__arrow').click(function () {
//         if ($(this).hasClass('index-slider__prev')) {
//             dataCounter--;
//             if (dataCounter <= 0) dataCounter = 0
//         } else {
//             dataCounter++;
//             if (dataCounter >= 3) dataCounter = 2
//         }
//         sliding(dataCounter);
//     });

//     owlMobNav.on('changed.owl.carousel', function(event) {
//         dataCounter = event.item.index;
//         sliding(dataCounter);
//     });

//     function sliding(dataCounter) {
//         $('.service-content-wrapper').removeClass('desktop-opacity');
//         $('.service-content-wrapper').eq(dataCounter).addClass('desktop-opacity');
//         $('.sliderCatCh').removeClass('desktop-chosen')
//         $('.sliderCatCh').eq(dataCounter).addClass('desktop-chosen');
//     }
// });