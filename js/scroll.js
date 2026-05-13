$(function () {
    $(window).on('load scroll', function () {
        if ($(window).scrollTop() > 124) {
            $('header').addClass('headerScroll');
        } else {
            $('header').removeClass('headerScroll');
        }

    });
});
