window.onload = function() {
    history.pushState("", document.title, window.location.pathname + window.location.search);
    //menu handler
    let subheader;
    let mobileOnlys = document.querySelectorAll('.mobile-only')
    let content = document.querySelectorAll('.service-content-wrapper');
    let table = document.querySelectorAll('.service-content');
    let dash = document.querySelectorAll('.service-menu__subheader .service-menu__dash:first-of-type');
    let curSub = null;
    let curContent = null;
    let curI = null;
    let subheaderHandler;
    let arr = [];

    var owl = $('.owl-carousel');

    // Listen to owl events:
    

    let menuHandler = function() {
        if (window.innerWidth < 1024) {
            subheader = document.querySelectorAll('.team-menu-mobile__item');
            for (let i = 0; i < subheader.length; i++) {
                subheader[i].dataset.hash = '' + i;
                subheader[i].href = '#' + i;
                dash[i].classList.remove('dash-rotate');
            }

            

            var owlProd = $('.team-menu-mobile').owlCarousel({
                center: true,
                items: 1,
                loop: false,
                margin: 1,
                URLhashListener: true,
                // autoplayHoverPause: true,
                startPosition: 'URLHash',
                responsive: {
                    600: {
                        items: 1
                    }
                }
            });

            $('.team-menu-mobile__item').on('click', function(EO) {
               // console.log(EO.target.innerText)

                let textLink = EO.target.innerText;
                let count = 0;

                $('.service-content-wrapper').removeClass('desktop-opened');
                $('.service-content-wrapper').removeClass('desktop-opacity');
                
                

                $('.owl-item').removeClass('active center');

                if (textLink === 'Колористы') {
                     console.log('hhhh')
                    count = 1;
                    $('.owl-item').eq(count).addClass('active center');

                } else if (textLink === 'Парикмахеры') {
                    count = 2;
                    $('.owl-item').eq(count).addClass('active center');
                } else {
                    count = 0;
                    $('.owl-item').eq(count).addClass('active center');
                }

                $('.service-content-wrapper').eq(count).addClass('desktop-opened desktop-opacity');

                

                


            })

            owlProd.on('changed.owl.carousel', function(event) {
                
                let indexItem = event.item.index;
                //console.log(indexItem)

                $('.service-content-wrapper').removeClass('desktop-opened');
                $('.service-content-wrapper').removeClass('desktop-opacity');
                $('.service-content-wrapper').eq(indexItem).addClass('desktop-opened');
                $('.service-content-wrapper').eq(indexItem).addClass('desktop-opacity');



            });


                

           

            for (let i = 0; i < mobileOnlys.length; i++) {
                mobileOnlys[i].style.display = 'inline-block';
            }
        } else {
            subheader = document.querySelectorAll('.service-menu__subheader');
            for (let i = 0; i < mobileOnlys.length; i++) {
                mobileOnlys[i].style.display = 'none';
            }
        }
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
        curI ? dash[curI].classList.add('dash-rotate') : dash[0].classList.add('dash-rotate');
        curSub.classList.add('desktop-chosen');
        curContent.classList.add('desktop-opened');
        curContent.classList.add('desktop-opacity');
        if ($(window).width() >= 1024) {
            subheaderHandler = function(i, event) {
                if (curSub != subheader[i]) {
                    curSub.classList.remove('desktop-chosen');
                    curSub.classList.remove('mobile-chosen');
                    curContent.classList.remove('desktop-opacity');
                    backupCurContent = curContent;
                    setTimeout(() => {
                        backupCurContent.classList.remove('desktop-opened');
                    }, 1000);
                    if (window.innerWidth < 1024) {
                        subheader[i].classList.add('mobile-chosen');
                    }
                    subheader[i].classList.add('desktop-chosen');;
                    content[i].classList.add('desktop-opened');

                    //SLICK
                    let openItem =  $(subheader[i]).parent().find(subheader[i]).index();
                    $('.slideshow-left').slick('slickGoTo', 0);
                    $('.slideshow-right').slick('slickGoTo', 0);

                    
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
            subheader[i].removeEventListener('click', arr[i]);
            arr[i] = subheaderHandler.bind(null, i);
            subheader[i].addEventListener('click', arr[i]);
        }
    }
    menuHandler();
    window.addEventListener('resize', menuHandler);




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
        if (curI <= 1) {
            subheader[curI].scrollIntoView(false);
        }


    });
    sliderNext.addEventListener('click', () => {
        if (curI < arr.length - 1) {
            arr[curI + 1]();
        }
        subheader[curI].scrollIntoView(false);
    });



};


//



