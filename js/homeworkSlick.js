$(document).ready(function () {
    $('.slick__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
      });
    
    $('.slick-arrow').text('');
    $('.slick-active:last').css('opacity', 0.4);

    $('.slick-next').on('click', () => {
        $('.slick-active:last').css('opacity', 0.2).prev().css('opacity', 1);
    })
    $('.slick-prev').on('click', () => {
        $('.slick-active:last').css('opacity', 0.2).next().css('opacity', 1);
        $('.slick-active:first').css('opacity', 1);
    })
});

  
