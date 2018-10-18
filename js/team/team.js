$( function() {



	let slide_1;
	let slide_2;

	function initSclick() {
		slide_2 = $('.slideshow-right').slick({
			
			vertical: true,
			infinite: false,
			touchMove: false,
			swipe: false,
			speed: 800,
			cssEase: 'cubic-bezier(.17, 0, .58, 1)',
			  responsive: [
			    {
			      breakpoint: 1025,
			      settings: {
					vertical: true,
					verticalSwiping: true,
			        touchMove: true,
			        swipe: true
			      }
			    }
		    ]
		});

		slide_1 = $('.slideshow-left').slick({
			
			vertical: true,		
			infinite: false,
			touchMove: false,
			// vertical: true,
			// verticalSwiping: true,
			speed: 800,
			swipe: false,
			cssEase: 'cubic-bezier(.69, .01, .58, 1)',
			  responsive: [
			    {
			      breakpoint: 1025,
			      settings: {
					vertical: true,
					verticalSwiping: true,
			        touchMove: true,
			        swipe: true
			      }
			    }
		    ]
		});
	}

	

	let counterWheel = 0;
	let activeSlick_1;
	let activeSlick_2;

	//let minus = true;
	function setMouseWonSlidshow (event, nameSlide1, nameSlide2) {
		event = event || window.event;
		event.preventDefault();

		let chilItemLengLeft = $(`.desktop-opacity .${nameSlide1}`).find('.item').length;
		chilItemLengLeft--;
		activeSlick_1 = $('.slideshow-left .slick-active').index();

		let indexItemLeft =   $('.slideshow-left .slick-active').index();
		let indexItemRight =  $('.slideshow-right .slick-active').index();
		

		let chilItemLengRight = $(`.desktop-opacity .${nameSlide2}`).find('.item').length;
		chilItemLengRight--;
		activeSlick_2 = $('.slideshow-right .slick-active').index();


		if (event.deltaX > 0 || event.deltaY < 0) {
			let rightBool = activeSlick_1 >= chilItemLengLeft;
			let leftBool = activeSlick_2 >= chilItemLengRight;

			if (!rightBool) {
				slide_1.slick('slickNext');
			}
			if (!leftBool) {
				slide_2.slick('slickNext');				
			}	
			
		} else if (event.deltaX < 0 || event.deltaY > 0) {
			if (activeSlick_1 !== 0) {
				slide_1.slick('slickPrev');	
			}
			if (activeSlick_2 !== 0) {
				slide_2.slick('slickPrev');	

			}
			
		};
	}






	$('body:not(.service_only) .service-content-wrapper').on('mousewheel', function(e) {
		let event = e;
		setMouseWonSlidshow( event, 'slideshow-left', 'slideshow-right');

	});


	



	let stateResize = 1;
	let stateSclick = true;
	let loadres = 1;
	function changeResize()	{

		if ( $(window).width() <= 1023 ) {
			if (!stateResize) {
				$('.slideshow-left').slick('unslick');
				$('.slideshow-right').slick('unslick');
				slide_1.slick('unslick');
				slide_2.slick('unslick');
				$('.service-content-wrapper').off();
				stateResize = 1;
				stateSclick = false;
			} 

			if (loadres) {
				$('.slideshow-left').slick('unslick');
				$('.slideshow-right').slick('unslick');
				slide_1.slick('unslick');
				slide_2.slick('unslick');
				$('.service-content-wrapper').off();
				stateResize = 1;
				stateSclick = false;
				loadres = 0;
			}

			return
							
		} else {
			if (stateResize) {
				if (stateSclick) {
					stateResize = 0;
					return;
				} 

				$('.service-content-wrapper').on('mousewheel', function(e) {
					let event = e;
					setMouseWonSlidshow( event, 'slideshow-left', 'slideshow-right');
				});

				stateResize = 0;
				initSclick();
				
				stateSclick = true;				
			}

			return;	
		}
	};

	initSclick();
	changeResize();

	$(window).resize(changeResize);

	$('.one-third-block .article-preview').click(function (e) {
		if ($(this).hasClass('info')) $(this).removeClass('info');
		$('.article-preview').removeClass('info');
        if (!$(this).hasClass('info')) $(this).addClass('info');
        e.stopPropagation();
    });

    $('.hover_info').click(function (e) {
    	e.stopPropagation();
    	$('.article-preview.info').removeClass('info');
    });

    $(document).click(function () {
    	$('.article-preview').removeClass('info');
    });

    $('.concMastBtn').click(function (e) {
    	e.preventDefault();
    	e.stopPropagation();
    	$('.article-preview').removeClass('info');
    });

    var dataCounter = 0;
    var maxCounter = $('.sliderCatCh').length;

    let owlMobNav = $('.owl-carousel.team-menu-mobile').owlCarousel({
        margin:10,
        nav: false,
        items: 1
    });

    $('.sliderCatCh').click(function () {
        dataCounter = $(this).data('counter');
        sliding(dataCounter);
    });

    $('.index-slider__arrow').click(function () {
        if ($(this).hasClass('index-slider__prev')) {
            dataCounter--;
            if (dataCounter <= 0) dataCounter = 0
        } else {
            dataCounter++;
            if (dataCounter >= maxCounter) dataCounter = maxCounter-1
        }
        sliding(dataCounter);
    });

    owlMobNav.on('changed.owl.carousel', function(event) {
        dataCounter = event.item.index;
        sliding(dataCounter);
    });

    function sliding(dataCounter) {
        $('.service-content-wrapper').removeClass('desktop-opacity');
        $('.service-content-wrapper').eq(dataCounter).addClass('desktop-opacity');
        $('.sliderCatCh').removeClass('desktop-chosen')
        $('.sliderCatCh').eq(dataCounter).addClass('desktop-chosen');
    }




    let $togle_serv = $('.page-service-fu .sliderCatCh');

    $togle_serv.on('click', function() {

    	if ($(window).width() < 1024) {
    		if ($(this).hasClass('minus')) {
    			$(this).next('div').toggleClass('desktop-opacity');
    			return;
    		}
    	}

    	if ($(this).hasClass('minus')) {
    		if ( $(this).next('div').hasClass('desktop-opacity')) {
    			return;
    		} else {
    			$(this).next('div').toggleClass('desktop-opacity');
    		}	    
    	}	
    });



    let count = 0;
    function checkWidth() {
    	
    	if ($(window).width() < 1024) {
    		if (count) return;
    		count = 1;
    		$('.page-service-fu .service-content-wrapper').removeClass('desktop-opacity');
    		$('.page-service-fu .sliderCatCh').removeClass('minus');

    	} else {
    		count = 0;
    		let stateOpened = false;
    		$('.page-service-fu .desktop-opened').each( (key, value) => {
    			if ($(value).hasClass('desktop-opacity')) {
    				$('.page-service-fu .sliderCatCh').removeClass('minus desktop-chosen');
    				$('.page-service-fu .sliderCatCh').eq(key).addClass('desktop-chosen');
    				stateOpened = true;
    			}
    		});
    		if (!stateOpened) {
    			count = 0;
    			$('.page-service-fu .sliderCatCh').removeClass('minus desktop-chosen');
    			$('.page-service-fu .sliderCatCh').eq(0).addClass('desktop-chosen');
    			$('.page-service-fu .desktop-opened').eq(0).addClass('desktop-opacity ')
    		}

    	}
    }
    

    checkWidth();
    $(window).resize(checkWidth);





    //////////////////////////////////////////// Handel
   // $('.products-right-bar #prods').html('');
   //let parsC = JSON.parse(tableReserveFromLocal);

   // let handelScript = $('#table-servic-template-1').html();
    //let template = Handlebars.compile(productsAll);

   //let html = template(parsC[name]);



});


