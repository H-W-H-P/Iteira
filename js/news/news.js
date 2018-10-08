


$( function() {

	

	let slide_1;
	let slide_2;

	function initSclick() {
		slide_2 = $('.slideshow-right').slick({
			swipe: true,
			vertical: true,
			infinite: false,
			speed: 800,
			cssEase: 'ease-out'

		});

		slide_1 = $('.slideshow-left').slick({
			swipe: true,
			vertical: true,		
			infinite: false,
			speed: 800,
			cssEase: 'ease-in-out'

		});
	}

	

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

				initSclick();
				stateResize = 0;
				stateSclick = true;				
			}

			return;	
		}
	};

	initSclick();
	changeResize();

	$(window).resize(changeResize);


});

