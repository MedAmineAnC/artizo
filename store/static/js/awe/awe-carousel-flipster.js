;(function($) {
    'use strict';
    $('.flipster-carousel').flipster({
        style: 'flat',
        spacing: -0.05,
        nav: true,
        scrollwheel: false
    });

    // // Check owlCarousel
    // if (! $.fn.owlCarousel) {
    //     throw 'jQuery owlCarousel must loaded before the script.';
    // }

    // // Brands selector
    // var $brands = $('.flex-carousel.owl-carousel, .Awe_image_carousel');

    // // Render owlCarousel
    // $brands.each(function() {
    //     var $carousel = $(this);
    //     var data = $carousel.data();

    //     var items = $carousel.data('items');

    //     // Settings
    //     var sDefault = {
    //         items: items ? items : 4,
    //         nav: false,
    //         dots: true,
    //         responsive:  {
    //             320: { items: 1 },
    //             480: { items: 2 },
    //             768: { items: 3 },
    //             992: { items: items ? items : 4 }
    //         }
    //     };

    //     $carousel.owlCarousel($.extend(sDefault, data)).on('changed.owl.carousel', function(e) {
    //         // Find center item
    //         $brands.find('.owl-item').removeClass('current');

    //         var activeOwl = $brands.find('.owl-item.active');
    //         var numberActive = activeOwl.length;

    //         if(e.property.value == 1) {
    //             var indexCur = Math.round(numberActive / 2);
    //         } else {
    //             var indexCur = Math.floor(numberActive / 2) - 1;
    //         }
    //         // console.log(e);
    //         // var itemActive = $brands.find('.owl-item.active:eq(' + Math.floor(numberActive / 2) + ')');
    //         // console.log($brands.find('.owl-item.active').length);

    //         var index = 0;
    //         activeOwl.each(function() {
    //             if(index == indexCur) {
    //                 $(this).addClass('current');
    //             }
    //             index++;
    //         });
    //     });
    // });

})(jQuery);
