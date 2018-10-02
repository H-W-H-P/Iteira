


//menu handler




$('.service-menu__subheader').on('click', function(EO) {
	console.log($(this).next('.service-content'))
	$(this).next('div').toggle();
	

});




$( function() {
	//$( "#datepicker" ).datepicker();
} );


$('.datepicker-here').datepicker({
    language: {
        days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']
    }
})







/*Popup start*/

let bias = 1070;
let count = 0;


function textChange(e) {
	if (count > 4) {
		bias = 0;
		count = 0;
	}

	$('.screen-wrap').css('transform', `translateY(-${bias}px)`);
	bias += 1070;
	count++;
}




$('.envoke-order-btn').on('click', function(EO) {
	$('.popup-main').addClass('animated fadeIn');
	$('.popup-main').css('display', 'flex');
});


$('.change-service-btn').on('click', function() {
	textChange();
	$('.change-service').addClass('animated fadeOut');
	$('.change-service').css('display', 'none');

	$('.change-master').addClass('animated fadeIn');
	setTimeout(() => {
		
		$('.change-master').css('display', 'block');
	},700);

});


$('.change-master a').on('click', function() {
	textChange();
	$('.change-master').addClass('animated fadeOut');

	
	setTimeout(() => {
		
	
	},700);
});

























