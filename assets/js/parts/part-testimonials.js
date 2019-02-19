jQuery(document).ready(function ($) {

    // Init
    initTestimonialsSlider('.lp-testimonials-slider');


    // Testimonials slider
    function initTestimonialsSlider(sliderClassName) {

        $(sliderClassName).slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            dots: true,
            arrows: false,
            fade: true,
            customPaging : function(slider, i) {
                return '<button type="button" role="tab" id="slick-slide-control'+i+'" data-event-on="click" data-event-name="testimonials pagination clicked" aria-controls="slick-slide'+i+'" tabindex="-1">'+i+'</button>';
            },
            // variableWidth: true,
        });

    }



});



jQuery(window).load(function () {
    if (jQuery('.lp-testimonials-slider').hasClass('slick-initialized')) {
        jQuery('.lp-testimonials-slider').fadeIn(300);
    }
});
