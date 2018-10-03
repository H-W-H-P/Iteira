$(window).ready(function () {
    var boolCount = true;
    var counter = 0;


    $('.index-slider__prev').click(function () {
        if (boolCount) {
            counter--;
            if (counter < 0) counter = 2;
            slideChanging(counter);
        }
    });
    $('.index-slider__next').click(function () {
        if (boolCount) {
            counter++;
            if (counter >= 3) counter = 0;
            slideChanging(counter);
        }
    });


    function slideChanging (counter) {
        $('.index-sliding-fr').removeClass('opacity-true').addClass('opacity-false');
        $('.index-sliding-fr').eq(counter).addClass('opacity-true').removeClass('opacity-false');
        boolCount = false;
        setSlideTimeout(3000);
        $('.numbChange').html(counter + 1);
    }

    function setSlideTimeout (time) {
        setTimeout(function() { 
            boolCount = true;
        }, time);
    }

    var spriteImages    = document.querySelectorAll( '.slide-item__image' );
    var spriteImagesSrc = [];

    for ( var i = 0; i < spriteImages.length; i++ ) {
        var img = spriteImages[i];
        spriteImagesSrc.push( img.getAttribute('src' ) );
    }

    var initCanvasSlideshow = new CanvasSlideshow({
        sprites: spriteImagesSrc,
        displacementImage: '../img/dmaps/2048x2048/ripple.jpg',
        // autoPlay: true,
        // autoPlaySpeed: [1, 1],
        displaceScale: [100, 70]
    });

    // var mousePos = {};
    // var displacementSprite;
    // var currentMousePos = { x: window.innerWidth/2, y: window.innerHeight/2 };
    // var ancien_delta = 0;

    // function pixi_home() {

    //     raf_pixi_home = requestAnimationFrame(pixi_home);


    //     mousePos.x = displacementSprite.x;
    //     //mousePos.y = displacementSprite.y;
    //     mousePos.intensite = displacementFilter.scale.x;
    //     mousePos.largeur = displacementSprite.scale.x;

    //     mousePos.correction = 0;

    //     TweenMax.to(mousePos, 0.3, {
    //         x: currentMousePos.x,
    //         //y: currentMousePos.y,
    //         intensite: (currentMousePos.x - ancien_delta) * 10,
    //         largeur: Math.abs(((currentMousePos.x - ancien_delta) / 80) - 0.2),
    //         correction: (currentMousePos.x - ancien_delta) / 40,
    //         onUpdate: function () {
    //             displacementSprite.x = mousePos.x;
    //             //displacementSprite.y = mousePos.y;
    //             displacementFilter.scale.x = mousePos.intensite;
    //             displacementSprite.scale.x = mousePos.largeur;
    //             window["image" + num_image].x = delayx + mousePos.correction;
    //         },
    //         ease: Linear.easeNone
    //     });


    // }

    // function animations() {
    //     var renderer=PIXI.autoDetectRenderer(
    //         window.innerWidth, window.innerHeight, {transparent:!0}
    //     );

    //     document.getElementById('canv_wr').appendChild(renderer.view);

    //     var stage = new PIXI.Container();
    //     var loader = new PIXI.loaders.Loader();

    //     displacementSprite=PIXI.Sprite.fromImage("../img/index/frames/gradient4.png"); //gradient4_bis //gradient4
    //     displacementSprite.texture.baseTexture.wrapMode=PIXI.WRAP_MODES.CLAMP; //REPEAT // MIRRORED_REPEAT //CLAMP
    //     displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

    //     displacementFilter.scale.x = 50;
    //     displacementFilter.scale.y = 0;
    //     //centre pour curseur
    //     displacementSprite.pivot.x = 256;
    //     displacementSprite.pivot.y = 256;
    //     //echelle x/y
    //     displacementSprite.scale.x=0.2;

    //     stage.addChild(displacementSprite);
    //     stage.filters=[displacementFilter];

    //     pixi_home(); 
    // }

    // animations();


    // var app = new PIXI.Application(1920, 1080);
    // document.getElementById("canv_wr").appendChild( app.view );

    // app.stage.interactive = true;

    // var container = new PIXI.Container();
    // app.stage.addChild(container);


    // var displacementSprite = PIXI.Sprite.fromImage('../img/index/frames/gradient4.png');
    // displacementSprite.texture.baseTexture.wrapMode=PIXI.WRAP_MODES.CLAMP; //REPEAT // MIRRORED_REPEAT //CLAMP
    // var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

    // app.stage.addChild(displacementSprite);

    // container.filters = [displacementFilter];

    // displacementFilter.scale.x = 110;
    // displacementFilter.scale.y = 10;
    // displacementSprite.anchor.set(0.5);


    // var bg = PIXI.Sprite.fromImage(spriteImagesSrc[0]);
    // bg.width = app.screen.width;
    // bg.height = app.screen.height;

    // container.addChild(bg);

    // app.stage
    //     .on('mousemove', onPointerMove)
    //     .on('touchmove', onPointerMove);

    // function onPointerMove(eventData)
    // {
    //     displacementSprite.position.set(eventData.data.global.x - 25, eventData.data.global.y);
    // }
});