jQuery(document).on('ready', function ($) {
    "use strict";

   
    $("#mainmenu-area").sticky({
        topSpacing: 0
    });


    $('ul#nav li a[href^="#"], a.navbar-brand, a.scrolltotop').on('click', function (event) {
        var id = $(this).attr("href");
        var offset = 60;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });

    jQuery('.stellarnav').stellarNav({
        theme: 'dark'
    });

    $(window).scroll(function () {
        var $totalHeight = $(window).scrollTop();
        var $scrollToTop = $(".scrolltotop");
        if ($totalHeight > 300) {
            $(".scrolltotop").fadeIn();
        } else {
            $(".scrolltotop").fadeOut();
        }

        if ($totalHeight + $(window).height() === $(document).height()) {
            $scrollToTop.css("bottom", "90px");
        } else {
            $scrollToTop.css("bottom", "20px");
        }
    });

    $(window).stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });


    $('#mc-form').ajaxChimp({
        url: 'http://intimissibd.us14.list-manage.com/subscribe/post?u=a77a312486b6e42518623c58a&amp;id=4af1f9af4c', //Set Your Mailchamp URL
        callback: function (resp) {
            if (resp.result === 'success') {
                $('.subscriber-form input, .subscriber-form button').hide();
            }
        }
    });

  new WOW().init();


jQuery(window).on('load', function () {
    "use strict";
  
    $(".preeloader").fadeOut(1000);

});
