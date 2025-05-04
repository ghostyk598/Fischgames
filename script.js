$(document).ready(function () {
    $('.slider').bxSlider({
        pagerCustom: '.slider-nav',
        infiniteLoop: false,
        hideControlOnEnd: true,
        captions: true, 
        nextText: '',
        prevText: '',
        easing: 'jswing',
    });
});


condition = true;
function openfurnace () {
    anime({
        targets: '.menu-small',
        translateX: ['-100%', '0'],
        easing: 'easeOutBounce',
        direction: 'alternate',
        duration: 1000,
        loop: false
    })

    anime({
        targets: '.menu_small_icon',
        rotate: 90,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });

    anime({
        targets: '.stick',
        rotate: 180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });

    condition = false
};
function closefurnace () {
    anime({
        targets: '.menu-small',
        translateX: ['0', '-100%'],
        easing: 'easeOutBounce',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });

    anime({
        targets: '.menu_small_icon',
        rotate: 0,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });

    anime({
        targets: '.stick',
        rotate: 0,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });

    condition = true
};

$('.menu_small_icon').click( function () {
    if (condition) {
        openfurnace()
    } else {
        closefurnace()
    }
});
$('.container').on('touchstart', function(event) {
    start = event.originalEvent.touches[0].pageX;
})

$('.container').on('touchstart', function(event) {
    end = event.originalEvent.changedTouches[0].pageX;

    if (end - start >= 100 && condition) {
        openfurnace()
    } else if (start - end >= 100 && !condition) {
        closefurnace()
    }
})
