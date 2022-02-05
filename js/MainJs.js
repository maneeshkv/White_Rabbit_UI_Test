$(document).ready(function(){
  // Init WOW.js and get instance
  var wow = new WOW(
    {
      // boxClass: 'wow',
      // animateClass: 'animated',
      // offset: 0,
      mobile: true,
      live: true
    });
  wow.init();

  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $(".header__top").addClass("sticky");
    } else {
      $(".header__top").removeClass("sticky");
    }
  });

  // For menu--
  $('.hamburger').click(function(){
    $(this).toggleClass("is-active");
		$(".mblMenu ").toggleClass("active");
	});

  $('.prdctSec__Slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="slick-prev slick-arrow"><img src="img/Prevarw.svg"></div>',
    nextArrow: '<div class="slick-next slick-arrow"><img src="img/Nextarw.svg"></div>',
    fade: true,
    asNavFor: '.prdctSec__ThumbSlider'
  });
  $('.prdctSec__ThumbSlider').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.prdctSec__Slider',
    arrows: false,
    dots: false,
    focusOnSelect: true,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          arrows:false
        }
      }
    ]

  });

});