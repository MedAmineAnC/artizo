;(function($) {
    'use strict';

    // Check owlCarousel
    if (! $.fn.owlCarousel) {
        throw 'jQuery owlCarousel must loaded before the script.';
    }

    // Variable
    var $cNews = $('.home-section-model.owl-carousel, .Awe_blog');

    // Render owlCarousel
    $cNews.each(function() {
        var $carousel = $(this);
        var data = $carousel.data();

        var items = $carousel.data('items');

        // Default setting
        var sDefault = {
            items: 2,
            nav: false,
            dots: false,
            margin: 30,
            responsive:  {
                320: { items: 1 },
                480: { tems: 2 }
            }
        };

        $carousel.owlCarousel($.extend(sDefault, data));
    });

})(jQuery);
