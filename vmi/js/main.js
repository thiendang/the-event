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
        eventCounter.countdown('2017/05/10', function (e) {
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
    // $('#video-item').magnificPopup({
    //     disableOn: 700,
    //     type: 'iframe',

    //     mainClass: 'mfp-fade',
    //     removalDelay: 160,
    //     preloader: false,
    //     fixedContentPos: false
    // });
    // $.extend(true, $.magnificPopup.defaults, {
    //     iframe: {
    //         patterns: {
    //             youtube: {
    //                 index: 'youtube.com/',
    //                 id: 'v=',
    //                 src: 'http://www.youtube.com/embed/%id%?autoplay=1'
    //             }
    //         }
    //     }
    // });
    // $('#video-item').magnificPopup({
    //    items: {
    //       src: '<iframe text-align="center" width="700" height="400" src="https://www.youtube.com/embed/LzYrSF4cYnw?start=1026&autoplay=1" frameborder="1" allowfullscreen></iframe>',
    //       type: 'inline'
    //   }
    // });
    $('#video-item').magnificPopup({
              items: {
                     src: 'https://www.youtube.com/watch?v=LzYrSF4cYnw'
                 },
              type: 'iframe',
              iframe: {
                        markup: '<div class="mfp-iframe-scaler">'+
                                '<div class="mfp-close"></div>'+
                                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                                '</div>', 
                    patterns: {
                        youtube: {
                              index: 'youtube.com/', 
                              id: 'v=', 
                              src: '//www.youtube.com/embed/%id%?autoplay=1&start=1026' 
                            }
                         },
                         srcAction: 'iframe_src', 
                 }
            });
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

    // $(function() {
    //   $('a[href*="#"]:not([href="#"])').click(function() {
    //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //       var target = $(this.hash);
    //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //       if (target.length) {
    //         $('html, body').animate({
    //           scrollTop: target.offset().top
    //         }, 1000);
    //         return false;
    //       }
    //     }
    //   });
    // });
    $('a.smoth-scroll').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
        e.preventDefault();
    });

    function shuffleArray(a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
        return a;
    }
    var mentors = [
        {
            avatar: 'img/mentors/phamduyhieu.jpg',
            name: 'Ông Phạm Duy Hiếu',
            job: 'Tổng Giám Đốc Quỹ',
            detail: 'mentors/pdhieu.html'
        },
        {
            avatar: 'img/mentors/bachnguyenvu.jpg',
            name: 'Ông Bạch Nguyễn Vũ',
            job: 'Thành viên ban điều hành',
            detail: 'mentors/bnvu.html'
        },
        {
            avatar: 'img/mentors/lehongminh.jpg',
            name: 'Bà Lê Hồng Minh',
            job: 'Thành viên quỹ',
            detail: 'mentors/lhminh.html'
        },
        {
            avatar: 'img/mentors/phuakoonkee.jpg',
            name: 'Ông Phua Koon Kee',
            job: 'CEO Aquarius',
            detail: 'mentors/pkkee.html'
        },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        {
            avatar: 'img/mentors/nguyenduy.jpg',
            name: 'Ông Nguyễn Duy',
            job: 'Giám đốc Điều hành KOVA Trading',
            detail: 'mentors/nguyenduy.html'
        },
        {
            avatar: 'img/mentors/dangthioanh.jpg',
            name: 'Bà Đặng Thị Oanh',
            job: 'Giám đốc Điều hành TransformedU',
            detail: 'mentors/dtoanh.html'
        },
        {
            avatar: 'img/mentors/duongvananh.jpg',
            name: 'Bà Đường Vân Anh',
            job: 'Giám đốc điều hành CTCP I.value',
            detail: 'mentors/dvanh.html'                                                                                                                                    
        },
        {
            avatar: 'img/mentors/nguyennhaquyen.jpg',
            name: 'Bà Nguyễn Nhã Quyên',
            job: 'Head of Ecosystem Builder Unit',
            detail: 'mentors/mandynguyen.html'
        },
        {
            avatar: 'img/mentors/maithanhcong.jpg',
            name: 'Ông MAI THÀNH CÔNG',
            job: 'Mentor',
            detail: 'mentors/mtcong.html'
        },
        {
            avatar: 'img/mentors/nguyenducmau.jpg',
            name: 'Ông NGUYỄN ĐỨC MẬU',
            job: 'Mentor',
            detail: 'mentors/ndmau.html'
        },
        {
            avatar: 'img/mentors/nguyenvietduc.jpg',
            name: 'Ông NGUYỄN VIỆT ĐỨC',
            job: 'Mentor',
            detail: 'mentors/nvduc.html'
        },
        {
            avatar: 'img/mentors/nguyenminhphuc.jpg',
            name: 'Ông NGUYỄN MINH PHÚC',
            job: 'Mentor',
            detail: 'mentors/nmphuc.html'
        },
        {
            avatar: 'img/mentors/phandinhtuananh.jpg',
            name: 'Ông PHAN ĐÌNH TUẤN ANH',
            job: 'Mentor',
            detail: 'mentors/pdtanh.html'
        },
        {
            avatar: 'img/mentors/nguyendangtuanminh.jpg',
            name: 'Bà NGUYỄN ĐẶNG TUẤN MINH',
            job: 'Mentor',
            detail: 'mentors/ndtminh.html'
        }
    ];
    mentors = shuffleArray(mentors);
    for(var i = 0; i< 8; i++){
        let div1 = $('<div>').addClass('col-lg-3 col-md-3 col-sm-6 col-xs-6');
        let div2 = $('<div>').addClass('speakers-box');
        div1.append(div2);
        let a1 = $('<a>').append($('<img>').addClass('img-responsive').attr('src', mentors[i].avatar));
        div2.append(a1);
        let div3 = $('<div>').addClass('speakers-box-content').append($('<h3>').text(mentors[i].name));
        div3.append($('<span>').text(mentors[i].job));
        let div4 = $('<div>').addClass('speakers-read-more');
        let a2 = $('<a>').attr('href', mentors[i].detail);
        a2.append($('<i>').addClass('fa fa-plus').attr('aria-hidden','true'));
        div4.append(a2);
        div3.append(div4);
        div2.append(div3);
        $('.mentors-area').append(div1);
    }
})(jQuery);


