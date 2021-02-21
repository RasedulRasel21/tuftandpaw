(function ($) {
  $('.home-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: `<svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.5725 17.1429L30 8.57143L21.5725 0L20.1561 1.44071L26.1655 7.55278L1.90735e-06 7.55278V9.5902L26.1653 9.5902L20.1561 15.7021L21.5725 17.1429Z" fill="white"/>
    </svg>
    `,
    nextArrow: `<svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.42748 0.857143L0 9.42857L8.42748 18L9.84392 16.5593L3.83448 10.4472L30 10.4472V8.4098L3.83467 8.4098L9.84392 2.29785L8.42748 0.857143Z" fill="white"/>
    </svg>
    `,
    dots: true,
  });
  $('.feature-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
})(jQuery);
