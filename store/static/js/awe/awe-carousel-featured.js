;(function($) {
    'use strict';

    // Check owlCarousel
    if (! $.fn.owlCarousel) {
        throw 'jQuery owlCarousel must loaded before the script.';
    }

    // Variable
    var $cFea = $('.home-section-featured.owl-carousel, .Awe_feature');

    // Render owlCarousel
    $cFea.each(function() {
        var $carousel = $(this);
        var data = $carousel.data();

        var items = $carousel.data('items');

        // Default setting
        var sDefault = {
            items: 3,
            nav: true,
            dots: false,
            margin: 30,
            responsive:  {
                320: { items: 1 },
                480: { items: 2 },
                640: { items: 3 }
            }
        };

        $carousel.owlCarousel($.extend(sDefault, data));
    });

})(jQuery);
