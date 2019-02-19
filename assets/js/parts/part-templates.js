jQuery(document).ready(function ($) {

    // Init
    initTemplatesSlider('.lp-templates-slider');


    if ($(window).width() > 767 ) {
        showTemplateVideoOnHover();
    }

    // Init functions
    function initTemplatesSlider(sliderClassName) {
        $(sliderClassName).slick({
            infinite: true,
            // slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            variableWidth: true,
            prevArrow: '<div class="slick-arrow slick-prev" data-event-on="click" data-event-name="navigation arrow clicked"></div>',
            nextArrow: '<div class="slick-arrow slick-next" data-event-on="click" data-event-name="navigation arrow clicked"></div>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: true,
                    }
                }
            ]
        });
    }


    // Template hover video function
    function showTemplateVideoOnHover() {

        $('.lp-templates-slide-image').mouseover(function() {
            var currentImage = $(this);
            var videoSrcMP4 = $(currentImage).find('.lp-templates-slide-video').data('src-mp4');
            var videoSrcWEBM = $(currentImage).find('.lp-templates-slide-video').data('src-webm');

            var self = $(this);
            self.addClass('hover');

            if (!$(currentImage).find('video').length) {
                var video = '<video muted plays-inline><source src="'+videoSrcWEBM+'" type="video/webm"><source src="'+videoSrcMP4+'" type="video/mp4"></video>';
                var videoWrapper = $(currentImage).find('.lp-templates-slide-video');

                $(videoWrapper).html(video);

                $(currentImage).find('video').on("loadeddata", function() {
                    if (!self.hasClass('video-loaded')) {
                        self.addClass('video-loaded');
                        if (self.hasClass('hover')) {
                            $(currentImage).addClass('hide-image');
                            $(this).get(0).play();
                        }
                    }
                });

            } else if (self.hasClass('video-loaded')) {
                $(currentImage).addClass('hide-image');
                $(currentImage).find('video').get(0).play();
            }
        });

        $('.lp-templates-slide-image').mouseout(function() {
            var currentImage = $(this);
            $(this).removeClass('hover');
            $(currentImage).removeClass('hide-image');
        });
    }

});

jQuery(document).ready(function($) {
    // Fit video content to display area, ignoring title text.
    $('.lp-templates-slide').fancybox({
        helpers: {
            // Enable the media helper to better handle video.
            media: true,

            // Put comments within the white border.
            title: {
                type: 'inside'
            }
        },

        // Do not use this because it tries to fit title text as well.
        fitToView: false,

        // Prevent the introduction of black bars when resized for mobile.
        aspectRatio: true,

        // Restrict content to the display dimensions.
        maxWidth: "100%",
        maxHeight: "100%",
        autoSize: false,

        toolbar  : false,
        smallBtn : true,
        iframe : {
            preload : false
        },

        // Change the title keyword to 'caption' to avoid title text in tooltips.
        beforeLoad: function() {
            this.title = $(this.element).attr('caption');
        },

        // Override the default iframe dimensions with manually set dimensions.
        afterLoad: function() {
            this.width = $(this.element).data("width");
            this.height = $(this.element).data("height");

            var templateBtnLink = $('.fancybox-caption__body').text();

            if (templateBtnLink != '') {
                $('.fancybox-caption__body').text('');

                $('.fancybox-caption__body').append('<a href="'+templateBtnLink+'" class="btn-roundedFilled-pink btn-medium" data-utm-to-link="customize_CTA">Customize</a>');

                $('.fancybox-caption__body').appendTo('.fancybox-content');
            }
        },

        beforeClose: function() {
            $('.fancybox-caption__body').fadeOut(300);
        }
    });
});


jQuery(window).load(function () {
    if (jQuery('.lp-templates-slider').hasClass('slick-initialized')) {
        jQuery('.lp-templates-slider').fadeIn(300);
    }
});
