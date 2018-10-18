$(document).ready(function () {

    $('.input[name="tel"]').mask('(00) 000 0000');

    function validate (_this, trigger) {
        var ck_name = /^[А-Яа-яA-Za-z\s]{1,20}$/;
        var ck_text = /^[А-Яа-яA-Za-z0-9,.!?\s]{1,5000}$/;
        var ck_tel = /\(?([0-9]{2})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        var ck_number = /^\d+$/;
        var ck_date = /^(\d{1,2}).(\d{1,2}).(\d{2}|\d{4})$/;
        var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

        var type = $(_this).attr('name');

        if (type == 'number') {
            if (!ck_number.test($(_this).val())) {
                return false;
            } else {
                return true;
            }
        }
        if (type == 'text') {
            if (!ck_text.test($(_this).val())) {
              return false;
        } else {
              return true;
          }
        }
        if (type == 'password') {
            if (!ck_text.test($(_this).val())) {
                return false;
            } else {
                return true;
            }
        }
        if (type == 'date') {
            if (!ck_date.test($(_this).val())) {
                return false;
            } else {
                return true;
            }
        }
        if (type == 'mail') {
            if (!ck_email.test($(_this).val())) {
                return false;
            } else {
                return true;
            }
        }
        if (type == 'tel') {
            if (!ck_tel.test($(_this).val())) {
              return false;
            } else {
                return true;
            }
        }
        if (type == 'name') {
            if (!ck_name.test($(_this).val())) {
              return false;
            } else {
                  return true;
            }
        }
    }

    let timer;
    $('.write-massage').on('click', (EO) => {
        EO.preventDefault();
        $('.address-main').addClass('animated fadeOut');

        setTimeout(()=>{
            $('.address-main').removeClass('animated fadeOut').addClass('class-hide');
            $('.write-massage-and-thanks').removeClass('class-hide').addClass('form-a');
            $('.form').addClass('animated fadeIn');
        },700);

        setTimeout(() => {
            $('.form').removeClass('fadeIn');
        },1000);
    });

    $('.send-massage').click(function (EO) {
        EO.preventDefault();
       
        let trigger = true;
        let formValue = [];

        $('.form.about .group').removeClass('warm');
        $('.form.about .input').each(function( index ) {
            let _this = this;

            if (!validate(_this, trigger)) {
                $(this).parent().addClass('warm');
                trigger = false;

            }
        });
        $('.bnt-prev-n').removeClass('class-show-btn').addClass('class-hide'); 
        

       if (!trigger) return false;



        $('.form.about .input').each( (i)=> {
            formValue.push($('.input').eq(i).val());
        });

        $('.form.about .input').val('');
        //new
        $('.form').addClass(' fadeOut');
        $('.write-massage-and-thanks').removeClass('form-a');
        $('.about-thanks').removeClass('class-hide').addClass('class-show-flex');
        $('.about-thanks').addClass('animated slideInRight');



        timer = setTimeout(()=> {
            $('.form').removeClass('fadeOut');
            $('.address-main').removeClass('class-hide').addClass('animated fadeIn class-show');   
            $('.about-thanks').removeClass('class-show-flex').addClass('animated fadeOut class-hide');
            $('.bnt-prev-n').removeClass('class-show-btn').addClass('class-hide'); 


        },400000000000000000);

        setTimeout(()=> {
            $('.about-thanks').removeClass('fadeOut');
        },4100);


    });

    $('.input').focus(function() {
        let _this = this;
        $(_this).parent().removeClass('warm');
    });



    /*btn prev*/
    $('.bnt-prev-n').on('click', function(EO) {
        clearTimeout(timer);
        $('.write-massage-and-thanks').removeClass('form-a').addClass('class-hide');


        
        $('.about-thanks').removeClass('class-show-flex').addClass('animated fadeOut class-hide');


        $('.address-main').removeClass('class-hide').addClass('animated fadeIn class-show');
        
        setTimeout(() => {
            $('.form').removeClass('fadeOut');
        },400);
    });
 
  



    $(window).resize(function(EO) {
        
        if ( $(window).width() >= 690 ) {
            if ($('.map ').hasClass('active')) {
                $('.about-main-screen').removeClass('class-tab-hide');
                $('.map').removeClass('active');
            }
        } else {
            let tabMap = $('.about-tab-map');
            let tabAddres = $('.about-tab-adress');
            if ($(tabMap).hasClass('active')) {
                $('.map').addClass('active');
                $('.about-main-screen').removeClass('class-tab-show').addClass('class-tab-hide');
            } 
        }

    });

    //======== Toogle Map-Address
    //===========================
    $('.about-mobile-tab').on('click', (EO) => {
        EO.preventDefault()
        let target = EO.target;
        changeZoomMap();
        if (target.tagName != 'A') {
            return;
        }

        if ($(target).hasClass('about-tab-adress')) {
            
            $('.write-massage-and-thanks').removeClass('form-a').addClass('class-hide');

            $('.address-main').removeClass('class-hide').addClass('class-show');
            
            
            $('.about-thanks').removeClass('class-show');
           
        }

        let adress = $('.about-tab-adress').hasClass('active');
        let map = $('.about-tab-map').hasClass('active'); 
        let targetHasClass = $(target).hasClass('active');

        if (targetHasClass) return;

        if (targetHasClass === adress) {
            $(target).addClass('active');
            $('.about-tab-map').removeClass('active');
        } else {
            $(target).addClass('active');
            $('.about-tab-adress').removeClass('active');
        }

        if (!adress) {
            $('.about-main-screen').removeClass('class-tab-hide').addClass('class-tab-show');
            $('.map').removeClass('active');
        } else {
              $('.about-main-screen').removeClass('class-tab-show').addClass('class-tab-hide');
              $('.map').addClass('active');
        }   
    });



    ymaps.ready(init); 
    let myMap;
    let geoObj;
    let geoObj2;

    function init() {
        myMap = new ymaps.Map ("map", { 
            center: [53.908045017531684,27.569931829993273],  // Координаты объекта
            zoom: 14.5,
            controls: ['zoomControl']
        });

        myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)';

        geoObj = new ymaps.Placemark([53.904464070645815,27.58922949999988], {}, {
                    iconLayout: 'default#image',
                    iconImageHref: '../img/maps.svg',
                    iconImageSize: [53, 74],
                    iconImageOffset: [0, 0],
                }
                );
        myMap.geoObjects.add(geoObj); 

        geoObj.events.add('click', function () {
            removeClassPin();
            $('.sensation').addClass('active');
        });

        geoObj2 = new ymaps.Placemark([53.902251749840985,27.54976685581964], {}, {
                    iconLayout: 'default#image',
                    iconImageHref: '../img/maps.svg',
                    iconImageSize: [53, 74],
                    iconImageOffset: [0, 0]
                });
        myMap.geoObjects.add(geoObj2); 

        geoObj2.events.add('click', function () {
            removeClassPin();
            $('.metropol').addClass('active');
        });
    }

    function removeClassPin() {
        $('.sensation').removeClass('active');
        $('.metropol').removeClass('active');

        if ($(window).width() < 690) {
            $('.about-tab-map').removeClass('active');
            $('.about-tab-adress').addClass('active');
            $('.map').addClass('animated fadeOut');
            

            setTimeout(function() {
                $('.map').removeClass('active animated fadeOut');
                $('.about-main-screen').removeClass('class-tab-hide');
            }, 700);


        }



        setTimeout(function() {
            $('.sensation').removeClass('active');
            $('.metropol').removeClass('active');
        }, 5000);
    }

    $(window).resize(changeZoomMap);

    function changeZoomMap() {
        if ($(window).width() < 1400) {
           myMap.setZoom(13.5, {duration: 500});
        }
        if ($(window).width() < 768) {
            myMap.setZoom(12.5, {duration: 500});
        }
    }



});

