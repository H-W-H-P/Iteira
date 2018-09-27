let btnMassage = $('.group_write-massage').eq(0);



btnMassage.on('click', (EO) => {
	$('.about-box').hide();
	$('.form').show();
	$('.form').css('display', 'flex');
})



$('.group_send-massage').on('click', (EO) => {
	$('.form').hide();
	$('.about-thanks').show();
	$('.about-thanks').css('display', 'flex');

});



















