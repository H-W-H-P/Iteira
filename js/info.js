//video preview control

let videoBlock = document.querySelector('.section-main__vid');
let videoInsight = document.querySelector('.section-main__vid iframe');
videoBlock.addEventListener('click', function(event) {
    videoInsight.src += '?autoplay=1';
    setTimeout(function() {
        videoInsight.classList.remove('d-none');
        videoInsight.classList.add('d-block');
        videoBlock.classList.add('playing')
    }, 500)
});

//slider-soprano control
/*let slider = document.querySelector('.section-alike');
let articlePreviewSecond = document.querySelectorAll('.one-third-block-second .article-preview');
let articlePreviewThird = document.querySelectorAll('.one-third-block-third .article-preview');
for (let i = 0; i < articlePreviewSecond.length; i++) {
    articlePreviewSecond[i].style.bottom = '0';
};
for (let i = 0; i < articlePreviewThird.length; i++) {
    articlePreviewThird[i].style.bottom = '0';
};
let sliderHandler = function(event) {
    event.preventDefault();
    slider.removeEventListener('wheel', sliderHandler);
    for (let i = 0; i < articlePreviewSecond.length; i++) {
        articlePreviewSecond[i].style.bottom = 'calc(' + articlePreviewSecond[i].style.bottom + ' + calc(57.585vw + 60px))';
    }
    for (let i = 0; i < articlePreviewThird.length; i++) {
        articlePreviewThird[i].style.bottom = 'calc(' + articlePreviewThird[i].style.bottom + ' + calc(57.585vw + 60px))';
    }
    setTimeout(function() {
        slider.addEventListener('wheel', sliderHandler);
    }, 1000);
}
slider.addEventListener('wheel', sliderHandler);*/