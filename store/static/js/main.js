'use strict';

if (window.jQuery) var $ = window.jQuery;

$(function () {
    aweHosoren.init();

    //== DEMO ONLY
    aweSearchMenubar();
    aweQuickViewProduct();

    image2background();
});

function aweMaps(mapElement) {
    if (! mapElement) {
        mapElement = '#contact-map';
    }

    var map = new GMaps({
        el: mapElement,
        lat: $(mapElement).data('lat'),
        lng: $(mapElement).data('lng'),
        styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#dcdcdc"},{"visibility":"on"}]}],

        draggable: true,
        scrollwheel: false
    });

    map.addMarker({
        lat: $(mapElement).data('lat'),
        lng: $(mapElement).data('lng'),
    });
}

// ===
function aweSearchMenubar() {
    var $navbar = $('.awemenu-nav');

    var $searchForm = $('#menubar-search-form');
    var $openSearch = $('#open-search-form');
    var $closeSearch = $('#close-search-form');
    var $closeLogin =  $('#close-login-form');
    var $openLogin  =  $('#openLogin');
    var $loginForm = $('#menubar-login-form');
    var $wrapper      =  $('#wrapper');
    $openSearch.on('click', function(e) {
        e.preventDefault();
        $searchForm.toggleClass('open');
        $wrapper.toggleClass('bg-opacity');
        setTimeout(function() {
            $searchForm.find('input').focus();
        }, 250);
    });

    $openLogin.on('click', function(e) {
        e.preventDefault();
        $loginForm.toggleClass('open');
        $wrapper.toggleClass('bg-opacity');
    });

    $closeSearch.on('click', function(e) {
        e.preventDefault();
        $searchForm.removeClass('open');
        $wrapper.removeClass('bg-opacity');
    });

    $closeLogin.on('click', function(e) {
        e.preventDefault();
        $loginForm.removeClass('open');
        $wrapper.removeClass('bg-opacity');
    });

    $searchForm.keyup(function(e) {
        if (e.keyCode == 27 && $searchForm.hasClass('open')) {
            $searchForm.removeClass('open');
            $wrapper.removeClass('bg-opacity');
        }
    });


    $(window).resize(function() {
        if ($navbar.hasClass('awemenu-mobile')) {
            $searchForm.width('100%');
            $searchForm.css({right: '0'});
        } else {
            var $awemenu = $('.awemenu-nav .awemenu');
            var $aweicon = $('.awemenu-nav .navbar-icons');

            var width = $awemenu.width() + 50;
            var offsetRight = $aweicon.width() + 20;

            $searchForm.width('inherit');
            $searchForm.css({right: 'inherit'});
        }
    }).trigger('resize');

}

function aweQuickViewProduct() {
    var popup_content = $(".popup-content");
    var quickview_wrapper = $('.quickview-wrapper');
    $('.close-popup').on('click', function(e) {
        popup_content.hide();
    });
    $('.popup-content-wrapper').on('click', function(e) {
        e.stopPropagation();
    });
    $('.quick-modal').on('click', function(e) {
        e.stopPropagation();
    });
    $('body').on("click", function() {
        popup_content.hide();
        quickview_wrapper.hide();
    });
    $('.closeqv').on('click', function(e) {
        quickview_wrapper.hide();
    });
}
// ===
function aweMainSlider() {
    var $slider = $('.main-slider');

    $slider.owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        onInitialized: function() {
            $slider.find('.owl-item').each(function() {
                var $owlItem = $(this);

                var $mainSlide = $owlItem.find('.main-slider-item');
                var $mainImage = $owlItem.find('.main-slider-image > img');

                if ($mainSlide.length && $mainImage.length) {
                    $mainSlide.addClass('background');
                    $mainSlide.css('background-image', 'url('+$mainImage.attr('src')+')');

                    $mainImage.css({
                        opacity: 0,
                        visibility: 'hidden'
                    });
                }
            });
        }
    });
}

function awePriceSlider($selector) {
    if (! $selector) {
        $selector = $('#price-slider');
    }

    // alert(1);

    $selector.slider({
        values: [35, 250],
        min: 10,
        max: 320,
        step: 10,
        range: true,
        slide: function(e, ui) {
            console.log(ui);
            $('#amount').text('$'+ui.value);
        }
    });
}

function aweBlogMasonry($selector) {
    if (! $selector) {
        $selector = $('.blog-masonry .row-masonry');
    }

    $selector.imagesLoaded(function() {
        $selector.masonry({
            itemSelector: '.column',
            columnWidth: '.column'
        });
    });
}

function aweProfolioIsotope($selector) {
    if (! $selector) {
        $selector = $('.grid');
    }

    $selector.imagesLoaded(function() {
        var $grid = $selector.isotope({
            itemSelector: '.grid-item',
            layoutMode: 'masonry'
        });
    });

    $('.awe-nav').on('click', 'a', function(e) {
        e.preventDefault();

        $(this).parents('.awe-nav').find('li').removeClass('active');
        $(this).closest('li').addClass('active');

        var filter = $(this).attr('data-filter');
        $selector.isotope({ filter: filter });
    });
}

function aweProfolioDetail() {
    $('.lasted-portfolio-carousel').owlCarousel({
        items: 4,
        nav: true,
        dots: false,
        margin: 30,
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            768: { items: 3 },
            980: { items: 4 }
        }
    });

    $('.image').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: { enabled: true }
    });
}

function aweProductSidebar() {
    var $filterSidebar = $('#shop-widgets-filters');

    $filterSidebar.on('click', function(e) {
        e.stopPropagation();
    });

    $filterSidebar.on('show.bs.dropdown', function() {
        $('html,body').addClass('open-filters-open');
    });

    $filterSidebar.on('hide.bs.dropdown', function() {
        $('html,body').removeClass('open-filters-open');
    });
}

function aweProductRender(thumbHorizontal) {
    if (Modernizr && ! Modernizr.touch) {
        $('.easyzoom').easyZoom();
    }

    var sMain = new Swiper('.product-slider-main', {
        loop: false,

        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });

    var sThumb = new Swiper('.product-slider-thumbs', {
        loop: false,
        centeredSlides: true,
        spaceBetween: thumbHorizontal ? 15 : 0,
        slidesPerView: thumbHorizontal ? 4 : 3,
        direction: thumbHorizontal ? 'horizontal' : 'vertical',
        slideToClickedSlide: true
    });

    sMain.params.control = sThumb;
    sThumb.params.control = sMain;
}

function image2background(){
    $(window).load(function() {
      var image2background = $('.image2background').children('img');
      image2background.before(function () {
        var srcImg = $(this).attr('src');
        return '<div class="item-img" style="background-image: url(' + srcImg + ')">';
      });
    });
}

function sportHover() {
    var sportLink = $('.sport-link');

    var windowWidth = window.innerWidth;

    sportLink.each(function(){
        var el = $(this);

        if(windowWidth > 640) {
            var elWidth = el.outerWidth();
            el.on('mouseover', function() {
                /* Stuff to do when the mouse enters the element */
                var numberOther = elWidth - 5;
                var number = elWidth + 12;
                sportLink.css('width', numberOther);
                el.css('width', number);
            });

            el.on('mouseout', function() {
                /* Stuff to do when the mouse enters the element */
                sportLink.removeAttr('style');
            });
        } else {
            el.on('mouseover', function() {
                sportLink.removeAttr('style');
            });

            el.on('mouseout', function() {
                sportLink.removeAttr('style');
            });
        }
    });
}


function addClassHeader() {
    var scrollTrigger = 200;
    var scrollTop = $(window).scrollTop();
    if (scrollTop > scrollTrigger) {
        $('#header.header-v3').addClass('background-white');
    } else {
        $('#header.header-v3').removeClass('background-white');
    }
}
$(window).on('scroll', function() {
    addClassHeader();
});

$(window).on('load resize', function(){
    sportHover();
});
 /*  [ Add minus and plus number quantity ]
        - - - - - - - - - - - - - - - - - - - - */
  if( $( '.quantity' ).length > 0 ) {
    var form_cart = $( 'form .quantity' );
    form_cart.prepend( '<span class="minus"></span>' );
    form_cart.append( '<span class="plus"></span>' );

    var minus = form_cart.find( $( '.minus' ) );
    var plus  = form_cart.find( $( '.plus' ) );

    minus.on( 'click', function(){
      var qty = $( this ).parent().find( '.qty' );
      if ( qty.val() <= 1 ) {
        qty.val( 1 );
      } else {
        qty.val( ( parseInt( qty.val() ) - 1 ) );
      }
    });
    plus.on( 'click', function(){
      var qty = $( this ).parent().find( '.qty' );
      qty.val( ( parseInt( qty.val() ) + 1 ) );
    });
  }