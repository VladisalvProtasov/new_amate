/******/ (() => { // webpackBootstrap
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
//import jQuery from 'jquery';
// import slick from 'slick-carousel';

// menu
$('.menu-item').click(function () {
    $(this).addClass('active')
        .siblings('.menu-item').not(this)
        .removeClass('active');
    $('.menu_burger').removeClass('active');
    $('.menu-items').removeClass('active');
    // if (this.attributes.scroll) {
    //     $([document.documentElement, document.body]).animate({
    //         scrollTop: $(this.attributes.href.value).offset()?.top
    //     }, 1000);
    // }
})
$('.menu_burger').click(function () {
    $(this).toggleClass('active');
    $('.menu-items').toggleClass('active');
});
$('#radio1').click(function () {
    $('#fiz-inn').css('display', 'none')
});
$('#radio2').click(function () {
    $('#fiz-inn').css('display', 'block')
})

$('.js-slider-container').slick({
    dots: false,
    arrows: false,
    // infinite: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    // slidesToScroll: 4,
    speed: 300,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 970,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
// Sliders
// $('.js-slider-container').each((idx, container) => {
//     console.log(container)
//     $('.slider').slick({
//         dots: false,
//         arrows: false,
//         infinite: true,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         speed: 300,
//         // responsive: [
//         //     {
//         //         breakpoint: 1440,
//         //         settings: {
//         //             slidesToShow: 3,
//         //         }
//         //     },
//         //     {
//         //         breakpoint: 9700,
//         //         settings: {
//         //             slidesToShow: 2,
//         //         }
//         //     },
//         //     {
//         //         breakpoint: 680,
//         //         settings: {
//         //             slidesToShow: 1,
//         //         }
//         //     }
//         // ]
//     });
//     //
//     // $(container).find('.prev-slide').click(() => slider.slick('slickPrev'))
//     // $(container).find('.next-slide').click(() => slider.slick('slickNext'))
// })

// $('.js-slider-container2 .slider').slick({
//     dots: false,
//     arrows: false,
//     infinite: true,
//     responsive: [
//         {
//             breakpoint: Infinity,
//             settings: {
//                 slidesToShow: 3,
//             }
//         },
//         {
//             breakpoint: 970,
//             settings: {
//                 slidesToShow: 2,
//             }
//         }
//     ]
// });



/******/ })()
;
//# sourceMappingURL=main.f7541054.js.map