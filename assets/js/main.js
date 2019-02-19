jQuery(document).ready(function ($) {

    // Init
    initPrefillEmailField();


    // Init functions
    function initPrefillEmailField() {

        // validate prefill form
        var $form = $('.js-prefil-form');

        setPrefillFormAction();
        $(window).resize(function() { setPrefillFormAction(); });

        $form.each(function() {
            $(this).validate({
                onfocusout: false,
                onkeyup: false,
                rules: {
                    email: {
                        required: true,
                        email: true,
                    },
                },
                messages: {
                    email: {
                        required: "The email seems to be wrong.",
                        email: "The email seems to be wrong."
                    },
                },
                focusCleanup: true,
                focusInvalid: false,
            });
        });

        function setPrefillFormAction() {
            var action = $form.data('action-desktop');
            if (window.innerWidth < 768) { action = $form.data('action-mobile') || 'https://promo.com/categories?funnel=0'; }
            $form.attr('action', action);
        }
    }


});
