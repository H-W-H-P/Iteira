$(document).ready(function () {

	$('.input[name="tel"]').mask('(00) 000 0000');
	
	let owl = $('.owl-carousel').owlCarousel({
	    margin:10,
	    nav:true,
	    items: 1
	});

	//service
	$('.service-menu__subheader').on('click', function(EO) {
		$(this).next('div').toggle();
		if ($(this).hasClass('minus')) {
			$('.service-menu__subheader').removeClass('minus');
		} else {
			$('.service-menu__subheader').removeClass('minus');
			$(this).addClass('minus');
		}
	});

	//Calender
	let datepicker = $('.datepicker-here').datepicker({
	    language: {
	        days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']
	    }
	}).data('datepicker');








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
	function viwe(_this, _2this, _calenderVal) {	

		let dataValue = $(_this).data('value');
		let parent = $(_this).closest('.change-pop-up');
		parentNum = $(parent).index();

		parent.removeClass('active-popup').addClass('hidden');
		//$('.change-pop-up').addClass('animated fadeIn');

		

		

		if (_calenderVal) {
			dataValue = _calenderVal;
		}
		$('.form-hidden-content .hidden-input').eq(parentNum).val(dataValue);

		if (_this) {
			$('.change-pop-up').eq(counterTitle).removeClass('active-popup');
			counterTitle++;
			$('.change-pop-up').eq(counterTitle).removeClass('hidden').addClass('active-popup');
		} else {
			$('.change-pop-up').eq(counterTitle).removeClass('active-popup').addClass('hidden');
			counterTitle--;
			$('.change-pop-up').eq(counterTitle).removeClass('hidden').addClass('active-popup');
			
		}

		if (counterTitle === 6) {
			//$('.contact-thanks').removeClass('animated');
			if ($(window).width() <= 1023) {

				$('.wrap-title').removeClass('active-pop').addClass('active-title');
				return;
			} else {

			}

		}

		textChange(counterTitle);

		if (counterTitle > 0) {
			$('.bnt-prev').removeClass('hidden').addClass('active-pop-wrap');
		} else {
			$('.bnt-prev').removeClass('active-pop-wrap').addClass('hidden');
		}
		

		

	}


	let counter2 = 0;
	function textChange(val) {
		
		if (val > counter2) {
			$('.title-change').eq(counter2).removeClass('right');
			$('.title-change').eq(val).addClass('right');
			counter2++;
		} else {
			$('.title-change').eq(counter2).removeClass('right');
			$('.title-change').eq(val).addClass('right');
			counter2--;
		}
		
	}

	var $document = $('html, body');

	$('.btn-popup').on('click', function(EO) {
		$document.addClass('popUp');
		EO.preventDefault();
		$('.wrap-title').removeClass('hidden active-title').addClass('active-pop');
		$('.title-change').eq(0).addClass('right');
		$('.popup-main').removeClass('hidden').addClass('active-pop-wrap animated fadeIn');
		$('.change-service').removeClass('hidden').addClass('active-popup');
		$('.bnt-prev').removeClass('active-pop').addClass('hidden');
		counterTitle = 0;
	});

	$('.btn-reserv').on('click', function() {
		let _this = this;
		$('html, body').animate({
	        scrollTop: $(".title-main").offset().top
	    }, 70);
		viwe(_this, true);
		return false;
	});


	$('.datepicker--content').on('click', function(EO) {
		if (EO.target.className === 'datepicker--day-name') {
			return;
		}

		let targetValue = $(EO.target).data('date');
		let dateMonth = $('.datepicker--cell-day').eq(10).data('month');
		$('.data-manth').val(dateMonth);
		let _this = this;

		viwe(_this, 1, targetValue);
	});





	$('.popup-send .nav__elem.envoke-order-btn').on('click', function(EO) {
		EO.preventDefault();
		let _this = this;
		let trigger = true;

	    $('.group input.input').each(function( index ) {
	    	
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
			
			if ($(value).hasClass('checkbox')) {
				return;
			}
			valueArr[key] = $(value).val();
		});

		valueArr.push($('.data-manth').val());
		

		$('.open .input-value').val('');
		console.log(valueArr)


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
		let countCalender = 0;
		counter2 = 0;
		setTimeout(() => {
			$('.popup-main').removeClass('fadeOut').addClass('hidden');
		},500);
	});



	$('.bnt-prev').on('click', function() {
		viwe();
	});







});





