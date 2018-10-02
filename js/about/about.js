
//Click on Massage
$('.write-massage').on('click', (EO) => {

    $('.address-main').addClass('animated fadeOut');
    setTimeout(()=>{
        $('.address-main').hide();
        $('.address-main').removeClass('animated fadeOut');
        
        $('.form').addClass('animated slideInRight');
        $('.form').show();
        $('.form').css('display', 'block');
    },700);

    
});






//======== Toogle Map-Address
//===========================
$('.mobile-title').on('click', (EO) => {
    EO.preventDefault()
	  let target = EO.target;
    
    if (target.tagName != 'A') {
        return;
    }

    if ($(target).hasClass('about-tab-adress')) {
        $('.address-main').show();
        //$('.address-main').removeClass('animated fadeOutDown');
        $('.form').hide();
        $('.about-thanks').hide();
    }

	

	  let adress = $('.about-tab-adress').hasClass('active');
	  let map = $('.about-tab-map').hasClass('active');	
	  let targetHasClass = $(target).hasClass('active');

	  if (targetHasClass) return;

	  if (targetHasClass === adress) {
		//console.log('+');
		    $(target).addClass('active');
		    $('.about-tab-map').removeClass('active');
	  } else {
		//console.log('-')
		    $(target).addClass('active');
		    $('.about-tab-adress').removeClass('active');
	  }

	  if (!adress) {
  		$('.about-main-screen').show();
  		$('.map').removeClass('active');
	  } else {
  		$('.about-main-screen').hide();
  		$('.map').addClass('active');
	  }
});





//=========Validation form

$('.send-massage').click(function (EO) {
  
    var trigger = true;
    $('.group').removeClass('warm');
    $('.group input').each(function( index ) {
		
        var _this = this;
            
        if (!validate(_this, trigger)) {
            $(this).parent().addClass('warm');
            trigger = false;
        }
	  
    });

    let areaVal = $('.group textarea').val();
    if (!trigger) {
        if (areaVal === '') {
            $('.group textarea').parent().addClass('warm');
        }
        return false;
    }

    if (areaVal === '') {
        $('.group textarea').parent().addClass('warm');
        return false;
    }

    $('.form').addClass('animated fadeOut')
    $('.form').hide();

    $('.about-thanks').css('display', 'flex');
    $('.about-thanks').addClass('animated slideInRight');
    


    setTimeout(()=> {
        $('.address-main').addClass('animated fadeIn');
        $('.address-main').show();
        $('.about-thanks').addClass('animated fadeOut');
        $('.about-thanks').hide();
    },5000);
    
});

  function validate (_this, trigger) {
      var ck_name = /^[А-Яа-яA-Za-z\s]{1,20}$/;
      var ck_text = /^[А-Яа-яA-Za-z0-9,.!?\s]{1,5000}$/;
      var ck_tel = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
      var ck_number = /^\d+$/;
      var ck_date = /^(\d{1,2}).(\d{1,2}).(\d{2}|\d{4})$/;
      var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

      var type = $(_this).attr('type');
       //console.log(type)
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





/*btn prev*/

$('.bnt-prev').on('click', function(EO) {
    $('.form').addClass('animated fadeOut');
    $('.about-thanks').addClass('animated fadeOut');
    $('.form').hide();
    $('.about-thanks').hide();
    $('.address-main').addClass('animated fadeIn');
    $('.address-main').show();
});













