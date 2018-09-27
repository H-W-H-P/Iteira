let btnMassage = $('.group_write-massage').eq(0);



btnMassage.on('click', (EO) => {
	$('.about-box').hide();
	$('.form').show();
	$('.form').css('display', 'flex');
})



$('.group_send-massage').on('click', (EO) => {
	

	let name = $('.group_name input').val();
	let tel = $('.group_tel input').val();
	let parsTel = isNaN(tel);
	let massage = $('.group_text input').val();

	if (name === '') {
		$('.group_name input').css('border-bottom', '1px solid #e86464');
		$('.group_name .danger').css('display', 'block');
		$('.group_name label').css('color', '#e86464');
		EO.preventDefault();
		return;
	} else {
		$('.group_name input').css('border-bottom', '1px solid #d2ab66');
		$('.group_name .danger').css('display', 'none');
		$('.group_name label').css('color', '#d2ab66');
	}

	
	if (tel === '') {
		$('.group_tel input').css('border-bottom', '1px solid #e86464');
		$('.group_tel .danger').css('display', 'block');
		$('.group_tel label').css('color', '#e86464');
		EO.preventDefault();
		return;
	} else if(parsTel) {
		$('.group_tel input').css('border-bottom', '1px solid #e86464');
		$('.group_tel .danger').css('display', 'block');
		$('.group_tel label').css('color', '#e86464');
		EO.preventDefault();
		return;
	} else {
		$('.group_tel input').css('border-bottom', '1px solid #d2ab66');
		$('.group_tel .danger').css('display', 'none');
		$('.group_tel label').css('color', '#d2ab66');
	}



	if (massage === '') {
		$('.group_text input').css('border-bottom', '1px solid #e86464');
		$('.group_text .danger').css('display', 'block');
		$('.group_text label').css('color', '#e86464');
		EO.preventDefault();
		return;
	} else {
		$('.group_text input').css('border-bottom', '1px solid #d2ab66');
		$('.group_text .danger').css('display', 'none');
		$('.group_text label').css('color', '#d2ab66');
	}


	$('.form').hide();
	$('.about-thanks').show();
	$('.about-thanks').css('display', 'flex');

});






$('.about-mobile-link').on('click', (EO) => {
	let target = EO.target;
	console.log($(target).hasClass('about-mobile-link-btn-map'))

	if ($(target).hasClass('about-mobile-link-btn-map')) {
		$('.wrapp').css('display', 'none');
		$(target).addClass('active');
		$('.about-mobile-link-btn-adress').removeClass('active');
		$('.map').addClass('map-mobile-open');
	} else {
		$('.wrapp').css('display', 'block');
		
		
		$('.map').removeClass('map-mobile-open');

		
	}
});












