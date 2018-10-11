


$( function() {



	let slide_1;
	let slide_2;

	function initSclick() {
		slide_2 = $('.slideshow-right').slick({
			swipe: true,
			vertical: true,
			infinite: false,
			speed: 800,
			cssEase: 'cubic-bezier(.17, 0, .58, 1)'

		});

		slide_1 = $('.slideshow-left').slick({
			swipe: true,
			vertical: true,		
			infinite: false,
			speed: 800,
			cssEase: 'cubic-bezier(.69, .01, .58, 1)'

		});
	}

	

	let counterWheel = 0;
	let activeSlick_1;
	let activeSlick_2;


	function setMouseWonSlidshow (event, nameSlide1, nameSlide2) {
		event = event || window.event;
		event.preventDefault();

		let chilItemLengLeft = $(`.${nameSlide1}`).find('.items').length;
		chilItemLengLeft--;
		activeSlick_1 = $('.slideshow-left .slick-active').index();

		let indexItemLeft =   $('.slideshow-left .slick-active').index();
		let indexItemRight =  $('.slideshow-right .slick-active').index();
		
		let activeItemStr = `${indexItemLeft}-${indexItemRight}`;

			//$('.body-info').attr('data-left', 'fff');
			//$('.desktop-chosen').data('left', `${indexItemLeft}`);

		console.log($('.desktop-chosen'));
		//console.log()
		



		let chilItemLengRight = $(`.${nameSlide2}`).find('.items').length;
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

	
	$('.wrap-from-slider').on('mousewheel', function(e) {
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
				$('.wrap-from-slider').off();
				stateResize = 1;
				stateSclick = false;
			} 

			if (loadres) {
				$('.slideshow-left').slick('unslick');
				$('.slideshow-right').slick('unslick');
				slide_1.slick('unslick');
				slide_2.slick('unslick');
				$('.wrap-from-slider').off();
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

				$('.wrap-from-slider').on('mousewheel', function(e) {
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


	$('.service-menu__subheader').on('click', function() {

		//console.log($('.desktop-chosen'))
	})


});

