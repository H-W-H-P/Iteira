$(document).ready(function () {

	$('.input[name="tel"]').mask('(00) 000 0000');

	let owl = $('.owl-carousel').owlCarousel({
	    margin:10,
	    nav: false,
	    items: 1
	});
	
	let owlMobNav = $('.owl-carousel.team-menu-mobile').owlCarousel({
	    margin:10,
	    nav: false,
	    items: 1
	});

	owlMobNav.on('changed.owl.carousel', function(event) {
		console.log(event.item.index)
	});

	//service
	$('.service-menu__subheader').on('click', function(EO) {
		$('.toggle-box').hide();
		$(this).next('div').show();
		if ($(this).hasClass('minus')) {
			$('.service-menu__subheader').removeClass('minus');
			$(this).next('div').hide();
		} else {
			$('.service-menu__subheader').removeClass('minus');
			$(this).addClass('minus');
		}
		var $this = $(this);
		if (!$this.closest('.popup-main').length) $('html').animate({ scrollTop: $this.offset().top}, 500);
		else {			
			var topMargin = $('.service-menu').offset().top;
			$('.service-menu').scrollTop(0);
			$('.service-menu').scrollTop($this.offset().top - topMargin - 10);
		}		
	});

	//Calender
	let datepicker = $('.datepicker-here').datepicker({
	    language: {
	        days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']
	    }
	}).data('datepicker');

	datepicker.update('minDate', new Date());






	function writeDate (value) {
		let date = value;
		let dateDate = $('.datepicker--cell-day').eq(10).data('month');
		let yearMonth = [ 'Январь', 'Февраль', 'Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
		let count = 0;

		for (let i = dateDate; i <= 11; i++) {
			
			$('.datepicker-here .item').eq(count).text(yearMonth[i]);
			count++;
		}

		let otherCount = 11  - dateDate;
		otherCount = otherCount - 9;
		for (let i = otherCount; i <= dateDate; i++) {
			
			$('.datepicker-here .item').eq(count).text(yearMonth[i]);
			count++;
		}
	}

	



	let countCalender = 0;
	let monthCounter = 0;

	writeDate();

	owl.on('changed.owl.carousel', function(event) {
		var count = $('.active .item').data('number');
	
		if (event.item.index === monthCounter) return;
		if (monthCounter >= event.item.index) {
			datepicker.prev();
			countCalender--;
		} else {
			datepicker.next();
			countCalender++;
		}
		monthCounter = event.item.index;
	});










	//Validation form
	function validate (_this, trigger) {
	    var ck_name = /^[А-Яа-яA-Za-z\s]{1,20}$/;
	      var ck_text = /^[А-Яа-яA-Za-z0-9,.!?\s]{1,5000}$/;
	      var ck_tel = /\(?([0-9]{2})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
	      var ck_number = /^\d+$/;
	      var ck_date = /^(\d{1,2}).(\d{1,2}).(\d{2}|\d{4})$/;
	      var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

	      var type = $(_this).attr('name');
	      if (type == 'number') {
	        if (!ck_number.test($(_this).val())){
	          return false;
	        }
	        else {
	          return true;
	        }
	      }
	      if (type == 'text') {
	        if (!ck_text.test($(_this).val())){
	          return false;
	        }
	        else {
	          return true;
	        }
	      }
	      if (type == 'password') {
	        if (!ck_text.test($(_this).val())){
	          return false;
	        }
	        else {
	          return true;
	        }
	      }
	      if (type == 'date') {
	        if (!ck_date.test($(_this).val())){
	          return false;
	        }
	        else {
	          return true;
	        }
	      }
	      if (type == 'mail') {
	        if (!ck_email.test($(_this).val())){
	          return false;
	        }
	        else {
	          return true;
	        }
	      }
	      if (type == 'tel') {
	        if (!ck_tel.test($(_this).val())){
	          return false;
	        }
	        else {
	          return true;
	        }
	      }
	      if (type == 'name') {
	        if (!ck_name.test($(_this).val())){
	          return false;
	        }
	        else {
	          return true;
	        }
	      }
	  }


	//Start popUp
	let parentNum;
	let counterTitle = 0;
	
/*popup control*/
	function viwe(_this, _2this) {



		let parent = $(_this).closest('.change-pop-up');
		parentNum = $(parent).index();
		parent.removeClass('active-popup').addClass('hidden');
		let titleNum;
		let decrem = 1;

		if ((master != 0) && (counterTitle == 0)) {
			counterTitle++;
			decrem = 2;
		}

		if (_this) {
			$('.change-pop-up').eq(counterTitle).removeClass('active-popup');
			counterTitle++;
			titleNum = counterTitle - decrem;
			$('.title-change').eq(titleNum).removeClass('right');
			$('.title-change').eq(counterTitle).addClass('right');
			$('.change-pop-up').eq(counterTitle).removeClass('hidden').addClass('active-popup');
		} else {
			$('.change-pop-up').eq(counterTitle).removeClass('active-popup').addClass('hidden');
			$('.title-change').eq(counterTitle).removeClass('right');
			counterTitle--;
			$('.title-change').eq(counterTitle).addClass('right');
			$('.change-pop-up').eq(counterTitle).removeClass('hidden').addClass('active-popup');
		}

		if (counterTitle === 6) {
			if ($(window).width() <= 1023) {
				$('.wrap-title').removeClass('active-pop').addClass('active-title');
				return;
			}
		}

		if (counterTitle > 0) {
			$('.bnt-prev').removeClass('hidden').addClass('active-pop-wrap');
		} else {
			$('.bnt-prev').removeClass('active-pop-wrap').addClass('hidden');
		}

		scrollControl();
		

	}

	var $document = $('html, body');
	var master = '0';

	$('.btn-popup').on('click', function(EO) {
		EO.preventDefault();
		openPopUp();
		scrollControl();
	});

	///////////////////////////////////////////////////////service click on table span
	$('.btn-popup-service').on('click', function() {
		openPopUp();
		$('.title-change').eq(1).addClass('right');
		$('.title-change').eq(0).removeClass('right');
		//let master = $(this).data('master');
		let master = $('.change-master');
			
		viwe(this, true);
		$('.change-service').removeClass('active-popup').addClass('hidden');

		let dataValue = $(this).closest('tr').data('value');
		console.log(dataValue)
		$('.form-hidden-content .input-servic').val(dataValue);


		///////////////////
		
	});






	/////////////////////////////////////////////////////




	$('.concMastBtn').click(function (e) {
		master = $(this).data('master');
		openPopUp(master);
		$('.hidden-input.input-value').eq(1).val(master);
		let _this = this;
		writeValueInHideInput(_this, 2);
    });

	function openPopUp (master) {
		$document.addClass('popUp');
		$('.wrap-title').removeClass('hidden active-title').addClass('active-pop');
		$('.title-change').eq(0).addClass('right');
		$('.popup-main').removeClass('hidden').addClass('active-pop-wrap animated fadeIn');
		$('.change-service').removeClass('hidden').addClass('active-popup');
		$('.bnt-prev').removeClass('active-pop').addClass('hidden');
		counterTitle = 0;
		// if (master) {
		// 	console.log('heh')
		// }
	}

	let hideinp = 0;
	function writeValueInHideInput(box, tuning) {
		let parentThis =  $(box).closest('.change-pop-up');
		let numberPop = $(parentThis).data('popup');
		let dataValue = $(box).data('value');

		if (tuning) {
			numberPop = tuning;
		}

		switch (numberPop) {
			case 1: 
				$('.form-hidden-content .input-servic').val(dataValue);
			break;
			case 2: 
				$('.form-hidden-content .input-master').val(dataValue);
			break;
			case 4: 
				$('.form-hidden-content .input-time').val(dataValue);
			break;
		}
	}

	$('.btn-reserv').on('click', function() {
		let _this = this;
		$('html, body').animate({
	        scrollTop: $(".title-main").offset().top
	    }, 70);
		viwe(_this, true);
		writeValueInHideInput(_this);
		return false;
	});


	$('.datepicker--content').on('click', function(EO) {
		if (EO.target.className === 'datepicker--day-name') {
			return;
		}

		if ($(EO.target).hasClass('-disabled-')) {
			return;
		}



		let targetValue = $(EO.target).data('date');
		targetValue = `${targetValue}-день`;
		let dateMonth = $('.datepicker--cell-day').eq(10).data('month');
		dateMonth = `${dateMonth}-месяц`;
		$('.input-month').val(dateMonth);
		$('.input-day').val(targetValue);

		let _this = this;
		viwe(_this, 1);

	});





	$('.popup-send .button9').on('click', function(EO) {
		EO.preventDefault();
		let _this = this;
		let trigger = true;

	    $('.popup-main .group .input').each(function( index ) {
	    	
	      let _this = this;
	     	
	      if (!validate(_this, trigger)) {
	        $(this).parent().addClass('warm');
	        trigger = false;
	      } 

	    });    

	    

	    if ( !$('.agreement').is(':checked') ) {
	    	$('.group-agreement').addClass('warm');
	    	return false;
	    }

	    if (!trigger) return false;
  
		let inputValue = $('.open .input-value').get();
		let valueArr = [];


		inputValue.forEach((value, key) => {
			valueArr[key] = $(value).val();
		});

		console.log(valueArr)

		$('.open')[0].reset();

		function call(data) {
			let msg = JSON.parse(data);
	        $.ajax({
	          	type: 'POST',
	          	url: '',
	          	data: msg,
	          	success: function(data) {
	            	viwe(_this, true);
	          	},
	          	error:  function(xhr, str){
		    		alert('Возникла ошибка: ' + xhr.responseCode);
	         	 }
	        });
	    }


		viwe(_this, true);
		
		$('.bnt-prev').removeClass('active-pop-wrap').addClass('hidden');

		master = '0';

	});



	$('.input').focus(function() {
		let _this = this;
		$(_this).parent().removeClass('warm');
	});

	$('.checkbox-custom').on('click', function() {
		let _this = this;
		$(_this).closest('.group-agreement').removeClass('warm');
	});

	$('.group-agreement .label').on('click', function() {
		let _this = this;
		$(_this).closest('.group-agreement').removeClass('warm');
	});




	$('.cancel').on('click', function(EO) {
		$document.removeClass('popUp');
		$('.popup-main').removeClass('active-pop-wrap fadeIn').addClass('fadeOut');
		$('.change-pop-up').removeClass('active-popup').addClass('hidden');
		$('.bnt-prev').removeClass('active-pop-wrap').addClass('hidden');
		$('.title-change').removeClass('right');
		$('.wrap-title').removeClass('active-title');
		$('html').css('overflow-y', 'visible');
		let countCalender = 0;
		counter2 = 0;
		master = '0';
		setTimeout(() => {
			$('.popup-main').removeClass('fadeOut').addClass('hidden');
		},500);

		let manuPopUp = $('.menu-popup').hasClass('opened');

		if (manuPopUp) {
			$('.menu-popup').removeClass('opened').addClass('closed');
		}
		
	});



	$('.bnt-prev').on('click', function() {
		viwe();

	});





	$(".service-menu__subheader p").each(function () {
	    $(this).html( $(this).html().replace(/&amp;/g,"<span class='amper'>&</span>") );
	});



	// 
	$(window).resize(scrollControl);

	function scrollControl() {
		
		if ( $(window).width() <= 1023 ) {
			$("#mcs_containe").mCustomScrollbar("destroy");

			if ($('.change-master').hasClass('active-popup')) {
				$('.bar-popup').removeClass('bg-transparent barber-bot');
				$('.change-master').removeClass('bg-transparent');
				$('#mCSB_1_container ').removeClass('bg-transparent');
			}
	
			

		} else {

			$("#mcs_container").mCustomScrollbar({
				scrollInertia:500
			});

			if ($('.change-master').hasClass('active-popup')) {
				$('.bar-popup').addClass('bg-transparent barber-bot');
				$('.change-master').addClass('bg-transparent');
				$('#mCSB_1_container').addClass('bg-transparent');
			} else {
				$('.bar-popup').removeClass('bg-transparent barber-bot');
				$('.change-master').removeClass('bg-transparent');
				$('#mCSB_1_container ').removeClass('bg-transparent');
			}
			

		}


	}
	scrollControl();



});


// function debounce(func, wait, immediate) {

// 	var timeout;
// 	return function() {
// 		if (g) {
// 			console.log('he')
// 			g = 0;
// 		}
// 		var context = this, args = arguments;
// 		var later = function() {
// 			timeout = null;
// 			if (!immediate) func.apply(context, args);
// 		};
// 		var callNow = immediate && !timeout;
// 		clearTimeout(timeout);
// 		timeout = setTimeout(later, wait);
// 		if (callNow) func.apply(context, args);
// 	};
// };

// let g = 1;
// var myEfficientFn = debounce(function() {
	
// 	g = 1;
// }, 250);

// window.addEventListener('mousewheel', myEfficientFn);