jQuery(document).ready(function ($) {

    // Init
    defineSaveData();

    var resizeTimer;

    $(window).on('resize', function(e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            defineSaveData();
        }, 50);
    });


    // Autoplay define func

    function defineSaveData() {
        function autoplayMutedSupported() {
            var v = document.createElement('video');
            v.muted = true;
            v.play();
            return !v.paused;
        }

        if ($(window).width() < 1200) {

            // if (!autoplayMutedSupported()) {
            // 	// the default is show video.
            // 	$('.data-save-false').fadeOut(10);
            // 	$('.data-save-true').fadeIn(10);
            // } else {
            // 	// hide video tag and show img.
            // 	$('.data-save-true').fadeOut(10);
            // 	$('.data-save-false').fadeIn(10);
            // }

            Modernizr.on('videoautoplay', function(result){
                if(result) {
                    // 	// the default is show video.
                    $('.data-save-false').hide();
                    $('.data-save-true').show();
                }  else {
                    // 	// hide video tag and show img.
                    $('.data-save-true').hide();
                    $('.data-save-false').show();
                }
            });

        } else {
            $('.data-save-false').fadeIn(10);
            $('.data-save-true').fadeOut(10);
        }
    }

});
