/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {


    // trusted-slider
    $(function () {
        if ($('.trusted-slider').length) {
            $(".trusted-slider").owlCarousel({
                items: 3,
                margin: 30,
                nav: false,
                loop: true,
                autoplay: true,
                autoplayTimeout: 2500,
                smartSpeed: 2500,
                navText: ["", ""],
                dots: true,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    667: {
                        items: 3
                    },
                    1024: {
                        items: 4
                    },
                    1200: {
                        items: 5
                    }
                }
            });
        }

    });




    // testimonial-active
    $(function () {
        if ($('.testimonial-active').length) {
            $(".testimonial-active").owlCarousel({
                items: 3,
                margin: 30,
                nav: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 2500,
                animateOut: 'fadeOut',
                smartSpeed: 2500,
                navText: ["<img src='assets/img/arrow-left-s.svg'>", "<img src='assets/img/arrow-right-s.svg'>"],
                dots: true,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 1
                    },
                    1024: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    }
                }
            });
        }
    });





    // price-slider
    $(function () {
        if ($(window).width() < 991) {
            $('#price-package').addClass('price-slider owl-carousel owl-theme');
            if ($('.price-slider').length) {
                $(".price-slider").owlCarousel({
                    items: 3,
                    margin: 30,
                    nav: false,
                    loop: true,
                    autoplay: true,
                    dots: true,
                    autoplayTimeout: 2500,
                    smartSpeed: 1500,
                    autoplayHoverPause: true,
                    navText: ["", ""],
                    responsive: {
                        0: {
                            items: 1
                        },
                        767: {
                            items: 2
                        },
                        991: {
                            items: 2
                        }
                    }
                });
            }
        }
    })





    // wow js init
    $(function () {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true
        });
        wow.init();
    });





    $(function () {
        document.querySelector(".button").onmousemove = function (e) {
            var x = e.pageX - e.target.offsetLeft;
            var y = e.pageY - e.target.offsetTop;

            e.target.style.setProperty("--x", x + "px");
            e.target.style.setProperty("--y", y + "px");
        };
    })






    // Back to top

    var btn = $('#Back-to-Top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });








});
