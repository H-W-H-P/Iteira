


$( function() {

	

	let slide_1 = $('.slideshow-left').slick({
		swipe: true,
		vertical: true,		
		infinite: false,
		speed: 800,
		cssEase: 'ease-in-out'

	});

	let slide_2 = $('.slideshow-right').slick({
		swipe: true,
		vertical: true,
		infinite: false,
		speed: 800,
		cssEase: 'ease-out'

	});

	$('.logo').on('click', function() {
		slide_1 = null;
		slide_2 = null;
	});


	let counterWheel = 0;


	let activeSlick_1;
	let activeSlick_2;


	function setMouseWonSlidshow (event, nameSlide1, nameSlide2) {
		event = event || window.event;
		event.preventDefault();

		let chilItemLengLeft = $(`.desktop-opened .${nameSlide1}`).find('.item').length;
		chilItemLengLeft--;
		activeSlick_1 = $('.slideshow-left .slick-active').index();

		let chilItemLengRight = $(`.desktop-opened .${nameSlide2}`).find('.item').length;
		chilItemLengRight--;
		activeSlick_2 = $('.slideshow-right .slick-active').index();
		console.log(activeSlick_2)

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

	
	$('.service-content-wrapper').on('mousewheel', function(e) {
	//	setTimeout(()=>{
	//		counterWheel = 0;
	//	},1400);
	//	if (counterWheel > 0) return;
	//	counterWheel++;
	
		let event = e;
		setMouseWonSlidshow( event, 'slideshow-left', 'slideshow-right');

	})


	$('.service-content-wrappers').on("mousewheel ", function(event) {
		event.preventDefault();

		
		let chilItemLengLeft = $('.desktop-opened .slideshow-left').find('.item').length;
		chilItemLengLeft--;
		activeSlick_1 = $('.slick-active').index();

		let chilItemLengRight = $('.desktop-opened .slideshow-right').find('.item').length;
		chilItemLengRight;
		activeSlick_2 = $('.slick-active').index();
		

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

		
	});






	let counterResizeMobile = 0;
	let counterResizeDes = 0;

	function resizeChange() {
		if ( $(window).width() <= 1023 ) {
        	if (counterResizeMobile === 0) {
        		$('.service-menu').removeClass('news-show').addClass('news-hide');
	            $('.news-mobile').removeClass('news-hide').addClass('news-show');
	            $('.news-mobile-action').html('');
	            let itemAction = $('.wrap-action').find('.item-news').each( (index, elem) => {
	           		let c = $(elem).clone();

	           		$('.news-mobile-action').append(c);
	           });  
	           counterResizeDes = 0;
	           counterResizeMobile++; 
        	} else {
        		return;
        	}
        } else {
        	if (counterResizeDes === 0) {      		
        		$('.service-menu').removeClass('news-hide').addClass('news-show');
        		$('.news-mobile').removeClass('news-show').addClass('news-hide');
        		counterResizeMobile = 0;
        		counterResizeDes++;
        	} else {
        		return;
        	}
        }
	}

	resizeChange();

    $(window).resize(resizeChange);



});

