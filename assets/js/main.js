(function($) {
    "use strict";


    /*=====================================
     Start Loading
     =====================================*/
    $(window).on('load', function () {
        $('#loading').fadeOut(1000);
    });
    /*=====================================
     End Loading
     =====================================*/


    /* =====================================
     Header Fixed
     =====================================*/
    $(window).on('scroll', function(){
        if ($(window).scrollTop() >= 100) {
            $('header').addClass('fixed-header');
        }
        else {
            $('header').removeClass('fixed-header');
        }
    });
    /* =====================================
     Header End
     =====================================*/



    /*=====================================
     Start Typed
     =====================================*/
    $(function () {
        $("#typed").typed({
            stringsElement: $('#typed-strings'),
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            backDelay: 3000,
            loop: true,
            loopCount: false,
            showCursor: true,
            cursorChar: "*",
            attr: null,
            contentType: 'html'
        });
    });
    /*=====================================
     End Typed
     =====================================*/



    /*=====================================
     Start Portfolio filter
     =====================================*/
    var containerEl = document.querySelector('.portfolio-filter');
    var mixer = mixitup(containerEl);
    /*=====================================
     End Portfolio filter
     =====================================*/



    $(document).ready(function(){
        /* =====================================
         Home Banner
         =====================================*/
        $(".home-banner").height($(window).height());

        $(window).on('resize', function(){
            $(".home-banner").height($(window).height());
        });
        /* =====================================
         Home Banner end
         =====================================*/



        /* =====================================
         Header Scroll
         =====================================*/
        $('.header .navbar').onePageNav({
            currentClass: 'current',
            changeHash: false,
            scrollSpeed: 1000
        });
        /* =====================================
         Header Scroll end
         =====================================*/



        /* =====================================
         Banner Icon Scroll
         =====================================*/
        $(".icon-btn").on('click', function() {
            $('html,body').animate({
                    scrollTop: $("#about").offset().top},
                'slow');
        });
        /* =====================================
         Banner Icon Scroll end
         =====================================*/



        /* =====================================
         Elements animating while entering the viewport
         =====================================*/
        $('.animate').viewportChecker({
            classToAdd: 'animated fadeIn',
            offset: 100
        });


    });

})(jQuery);