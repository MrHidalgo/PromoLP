jQuery(document).ready(function ($) {

    // Globals
    var tracking_page_name = page.tracking_page_name;

    // Init
    initAddPageNameToBody();
    initTrackingPageView();
    initTrackingOn();
    initAddUtmToLink();


    // Init functions
    function initAddPageNameToBody() {
        if (tracking_page_name) {
            $('body').attr('data-tracking-page-name', tracking_page_name);
        }
    }

    function initTrackingPageView() {
        // call this when the page loads:
        promoReporting.trackPageView('landing page', {
            pageType: tracking_page_name
        });
    }

    function initTrackingOn() {
        $('[data-event-on="click"]').click(function() {
            sendTracking.call( this );
        });

        function sendTracking() {
            var eventName = $(this).data('event-name');
            var eventData = $(this).data('event-data');

            // send this event object.
            var eventDataObject = { pageType: tracking_page_name, asset: tracking_page_name };

            for (var prop in eventData) {
                if (eventData.hasOwnProperty(prop)) {
                    eventDataObject[prop] = eventData[prop];
                }
            }
            promoReporting.trackEvent(eventName, eventDataObject);

            // debug
            var debug = false;
            if (debug) {
                console.log('Event Name: ' + eventName);
                console.log('Event Data: ');
                console.log(eventDataObject);
                console.log('---------');
            }
        }
    }

    function initAddUtmToLink() {
        $( document ).on('click', '[data-utm-to-link]', function(e) {
            var utmToLink = $(this).data('utm-to-link');
            var href = $(this).attr('href');
            if (utmToLink && href) {
                e.preventDefault();
                var utm_content = tracking_page_name + '_' + utmToLink;
                if (utm_content) {
                    href = addParamToUrl(href, 'utm_content', utm_content);
                }
                window.location.href = href;
            }
        });
    }


    // Helper Functions
    function addParamToUrl(href, key, value) {
        if (href && key && value) {
            var url = new URL(href);
            url.searchParams.set(key, value);
            return url.href;
        }
        return href;
    }

});
