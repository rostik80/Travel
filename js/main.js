$(document).ready(function () {
    $(".mobile-menu").click(function () {
        $(".mobile-menu span").toggleClass("active");
        $(".nav__menu").toggleClass("active");
        $("body").toggleClass("overlay");
    })
    $(".sliders").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: "<button type='button' class='slick-prev btn btn-slider'><img src='img/btnPrev.svg' alt=''></button>",

        nextArrow: "<button type='button' class='slick-next btn btn-slider'><img src='img/btnNext.svg' alt=''></button>",
        responsive: [
            {
                breakpoint: 1351,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1101,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 851,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 551,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            }
        ]
    })
});