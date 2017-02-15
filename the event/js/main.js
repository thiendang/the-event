(function ($) {

    "use strict";

    /*-------------------------------------
     Document Ready function
     -------------------------------------*/
    $(function () {

        /* Fixing for hover effect at IOS */    
        $('*').on('touchstart', function () {
            $(this).trigger('hover');
        }).on('touchend', function () {
            $(this).trigger('hover');
        });


        // Gallery popup
        var galleryZoom = $('.gallery-wrapper');
        if (galleryZoom.length) {
            galleryZoom.magnificPopup({
                type: 'image',
                delegate: 'a',
                gallery: {
                    enabled: true
                }
            });
        }

       
        // $(window).on('load',function(){
        //     // Onepage Nav on meanmenu
        //     $('.mean-nav ul').onePageNav({
        //         scrollOffset: 80,
        //         end: function() {
        //             $('.meanclose').trigger('click');
        //         } 
        //     });
        // });


    });


    /*-------------------------------------
     jQuery MeanMenu activation code
     --------------------------------------*/
    $('nav#dropdown').meanmenu({siteLogo: "<a href='index.html' class='logo-mobile-menu'><img src='img/mobile-logo.png' /></a>"});

    /*-------------------------------------
     Wow js Active
     -------------------------------------*/
    new WOW().init();

    /*-------------------------------------
     Jquery Scollup
     -------------------------------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*-------------------------------------
     Window load function
     -------------------------------------*/
    $(window).on('load', function () {

        // Page Preloader
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });

        //Load Isotop view
        var galleryIsoContainer = $('#event-gallery');
        if (galleryIsoContainer.length) {
            var blogGallerIso = galleryIsoContainer.imagesLoaded(function () {
                blogGallerIso.isotope({
                    itemSelector: '.event-gallery-item',
                    masonry: {
                        columnWidth: '.event-gallery-item'
                    }
                });
            });

        }


        //Load Isotop view 2
        var featureContainer = $('#isotope-container');
        if (featureContainer.length > 0) {
            featureContainer.imagesLoaded(function () {
                var $isotope = featureContainer.find('.featuredContainer').isotope({
                    filter: '*',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });

                featureContainer.find('.isotope-classes-tab').on('click', 'a', function () {
                    var $this = $(this);
                    $this.parent('.isotope-classes-tab').find('a').removeClass('current');
                    $this.addClass('current');
                    var selector = $this.attr('data-filter');
                    $isotope.isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    });
                    return false;
                });
            });
        }
    });// end window load function


    /*-------------------------------------
     Countdown activation code
     -------------------------------------*/
    var eventCounter = $('#countdown');
    if(eventCounter.length){
        eventCounter.countdown('2017/03/10', function (e) {
            $(this).html(e.strftime("<div class='countdown-section'><h2>%D<span> :</span></h2> <h3>day%!D</h3> </div><div class='countdown-section'><h2>%H<span> :</span></h2> <h3>Hour%!H</h3> </div><div class='countdown-section'><h2>%M<span> :</span></h2> <h3>Min%!M</h3> </div><div class='countdown-section'><h2>%S</h2> <h3>Sec%!S</h3> </div>"))

        });
    }


    /*-------------------------------------
     Contact Form processing
     -------------------------------------*/
    var contactForm = $('#contact-form');
    if (contactForm.length) {
        contactForm.validator().on('submit', function (e) {
            var _this = $(this),
                target = contactForm.find('.form-response');
            if (e.isDefaultPrevented()) {
                target.html("<div class='alert alert-danger'><p>Please select all required field.</p></div>");
            } else {

                $.ajax({
                    url: "vendor/php/form-process.php",
                    type: "POST",
                    data: contactForm.serialize(),
                    beforeSend: function () {
                        target.html("<div class='alert alert-info'><p>Loading ...</p></div>");
                    },
                    success: function (text) {
                        if (text === "success") {
                            _this[0].reset();
                            target.html("<div class='alert alert-success'><p><i class='fa fa-check' aria-hidden='true'></i>Message has been sent successfully.</p></div>");
                        } else {
                            target.html("<div class='alert alert-danger'><p>" + text + "</p></div>");
                        }
                    }
                });
                return false;
            }
        });
    }

    /*-------------------------------------
     jquery Nav Scroll activation code
     ------------------------------------- */
    var onePageNav = $('#navOnePage');
    if (onePageNav.length) {
        $('#navOnePage').onePageNav({
            scrollOffset: 80

        });
    }

    /*-------------------------------------
     Google Map
     -------------------------------------*/
    // if ($('#googleMap').length) {
    //     var initialize = function () {
    //         var mapOptions = {
    //             zoom: 15,
    //             scrollwheel: false,
    //             center: new google.maps.LatLng(-37.81618, 144.95692)
    //         };
    //         var map = new google.maps.Map(document.getElementById("googleMap"),
    //             mapOptions);
    //         var marker = new google.maps.Marker({
    //             position: map.getCenter(),
    //             animation: google.maps.Animation.BOUNCE,
    //             icon: 'img/map-marker.png',
    //             map: map
    //         });
    //     }
    //     google.maps.event.addDomListener(window, "load", initialize);
    // }

    /*-------------------------------------
     Carousel slider initiation
     -------------------------------------*/
    $('.event-carousel').each(function () {
        var carousel = $(this),
            loop = carousel.data('loop'),
            items = carousel.data('items'),
            margin = carousel.data('margin'),
            stagePadding = carousel.data('stage-padding'),
            autoplay = carousel.data('autoplay'),
            autoplayTimeout = carousel.data('autoplay-timeout'),
            smartSpeed = carousel.data('smart-speed'),
            dots = carousel.data('dots'),
            nav = carousel.data('nav'),
            navSpeed = carousel.data('nav-speed'),
            rXsmall = carousel.data('r-x-small'),
            rXsmallNav = carousel.data('r-x-small-nav'),
            rXsmallDots = carousel.data('r-x-small-dots'),
            rXmedium = carousel.data('r-x-medium'),
            rXmediumNav = carousel.data('r-x-medium-nav'),
            rXmediumDots = carousel.data('r-x-medium-dots'),
            rSmall = carousel.data('r-small'),
            rSmallNav = carousel.data('r-small-nav'),
            rSmallDots = carousel.data('r-small-dots'),
            rMedium = carousel.data('r-medium'),
            rMediumNav = carousel.data('r-medium-nav'),
            rMediumDots = carousel.data('r-medium-dots');

        carousel.owlCarousel({
            loop: (loop ? true : false),
            items: (items ? items : 4),
            lazyLoad: true,
            margin: (margin ? margin : 0),
            autoplay: (autoplay ? true : false),
            autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
            smartSpeed: (smartSpeed ? smartSpeed : 250),
            dots: (dots ? true : false),
            nav: (nav ? true : false),
            navText: ["<i class='flaticon-arrows-2'></i>", "<i class='flaticon-arrows-1'></i>"],
            navSpeed: (navSpeed ? true : false),
            responsiveClass: true,
            responsive: {
                0: {
                    items: ( rXsmall ? rXsmall : 1),
                    nav: ( rXsmallNav ? true : false),
                    dots: ( rXsmallDots ? true : false)
                },
                480: {
                    items: ( rXmedium ? rXmedium : 2),
                    nav: ( rXmediumNav ? true : false),
                    dots: ( rXmediumDots ? true : false)
                },
                768: {
                    items: ( rSmall ? rSmall : 3),
                    nav: ( rSmallNav ? true : false),
                    dots: ( rSmallDots ? true : false)
                },
                992: {
                    items: ( rMedium ? rMedium : 5),
                    nav: ( rMediumNav ? true : false),
                    dots: ( rMediumDots ? true : false)
                }
            }
        });

    });


    /*-------------------------------------
     Window onLoad and onResize event trigger
     -------------------------------------*/
    $(window).on('load resize', function () {
        //Define the maximum height for mobile menu
        var wHeight = $(window).height(),
            mLogoH = $('a.logo-mobile-menu').outerHeight();
        wHeight = wHeight - 50;
        $('.mean-nav > ul').css('height', wHeight + 'px');

    });


    /*-------------------------------------
     Jquery Stiky Menu at window Load
     -------------------------------------*/
    $(window).on('scroll', function () {
        var s = $('#sticker'),
            w = $('#wrapper'),
            h = s.outerHeight(),
            windowpos = $(window).scrollTop(),
            windowWidth = $(window).width(),
            h1 = s.parent('.header1-area'),
            h2 = s.parent('.header2-area'),
            h3 = s.parent('.header3-area'),
            h3H = h3.find('.header-top-area').outerHeight(),
            topBar = s.prev('.header-top-area');

        if (windowWidth > 767) {
            w.css('padding-top', '');
            var topBarH, mBottom = 0;
            if (h1.length) {
                topBarH = h = 1;
                mBottom = 0;
            } else if (h2.length) {
                mBottom = h2.find('.header-bottom-area').outerHeight();
                topBarH = topBar.outerHeight();
            } else if (h3.length) {
                topBarH = topBar.outerHeight();
            }

            if (windowpos >= topBarH) {
                s.addClass('stick');
                if (h2.length) {
                    topBar.css('margin-bottom', mBottom + 'px');
                }
            } else {
                s.removeClass('stick');
                if (h2.length) {
                    topBar.css('margin-bottom', 0);
                }
            }
        }
    });

})(jQuery);