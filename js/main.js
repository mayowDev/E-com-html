const breakpoint = [
  {
    breakpoint: 1280,
    settings: {
      slidesToShow: 4
    }
  },
  {
    breakpoint: 1009,
    settings: {
      slidesToShow: 3
    }
  },
  {
    breakpoint: 720,
    settings: {
      slidesToShow: 1
    }
  },
  {
    breakpoint: 460,
    settings: {
      slidesToShow: 1
    }
  }
];

// Hero slider
$('.hero-slider')
.not('.slick-intialized')
.slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    prevArrow:".slider-one .slider-btn .prev",
    nextArrow:".slider-one .slider-btn .next"
});


// product slider
$('.product-slider')
.not('.slick-intialized')
.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:".slider-two .slider-btn .prev",
    nextArrow:".slider-two .slider-btn .next",
    responsive: breakpoint
});



// features slider
$('.features-slider')
.not('.slick-intialized')
.slick({
    slidesToShow: 4,
    autoplay:true,
    autoplaySpeed:2000,
    slidesToScroll: 1,
    infinite: false,
    prevArrow:".slider-three .slider-btn .prev",
    nextArrow:".slider-three .slider-btn .next",
    responsive: breakpoint
});


// sofa slider
$('.sofa-slider')
.not('.slick-intialized')
.slick({
    slidesToShow: 4,
    autoplay:true,
    autoplaySpeed:2000,
    slidesToScroll: 1,
    // infinite: false,
    prevArrow:".slider-four .slider-btn .prev",
    nextArrow:".slider-four .slider-btn .next",
    responsive: breakpoint
});


/**  Brand Slider */
$(".brand-slider")
  .not(".slick-intialized")
  .slick({
    prevArrow: ".slider-five .slider-btn .prev",
    nextArrow: ".slider-five .slider-btn .next",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    responsive: breakpoint
    // infinite: true,
  });


  
/**  clients Slider */
$(".clients-slider")
.not(".slick-intialized")
.slick({
  prevArrow: "",
  nextArrow: "",
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  dots: true
});
