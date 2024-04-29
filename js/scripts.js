$(document).ready(function() {
    /* Якорь */
    // $("a[href^='#']").click(function (h) {
    //     h.preventDefault();
    //     var f = $(this).attr("href"),
    //         g = $(f).offset().top;
    //     $("body,html").animate({
    //         scrollTop: g
    //     }, 1500)
    //     if($('.header-menu').hasClass('nav-active')) {
    //         mobMenu.removeClass('fixed');
    //         headNav.removeClass('nav-active');
    //         mml1.removeClass('switched');
    //         mml2.removeClass('switched');
    //         mml3.removeClass('switched');
    //     }
    // });
    // слайдер с текстовыми отзывами
    $('.revs-slider-text').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        loop: true,
        dots: 0,
        speed: 300,
        arrows: true,
        centerPadding: '15px',
        adaptiveHeight: true,
        centerMode: 0,
        responsive: [
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    // модалка
    $(['data-fancybox']).fancybox();

/*Конец документа*/
});