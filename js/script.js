$(document).ready(function() {

// перелистывание с главного блока вниз =====================================
  $(".goto").on("click", function(event) {
    event.preventDefault();

    let offset = $(".goto").offset().top;

    $("html, body").animate({
      scrollTop: offset + 100
    }, 700);
  });
// ==========================================================================



// слайдеры заголовков и экрана телефона блока меню =========================
  let swiper1 = new Swiper('.menu__phone-carousel', {
    loop: false,
    slideClass: "menu__phone-image",
    watchOverflow: false,
    slidesPerView: 1,
    centeredSlides: true,
    watchSlidesProgress: true,
    slideActiveClass: "menu__phone-image_active",
  });


  let swiper2 = new Swiper('.menu__column', {
    slidesPerView: 5,
    centeredSlides: false,
    slideToClickedSlide: true,
    slideClass: "menu__item",
    slideActiveClass: "menu__item_active",
    watchOverflow: true,
    // controller: {
    //   control: swiper1
    // }
  });

  // swiper1.controller.control = swiper2;
  // swiper2.controller.control = swiper1;
  // const swipeAllSliders = (index) => {
  //   swiper1.slideTo(index);
  //   swiper2.slideTo(index);
    
  // }

  // swiper1.on('slideChange', () => swipeAllSliders(swiper1.activeIndex));
  // swiper2.on('slideChange', () => swipeAllSliders(swiper2.activeIndex));
  

$('.menu__item').eq(0).addClass("menu__item_active-item");
// $('.menu__phone-image').eq(0).addClass("menu__phone-image_active");

$('.menu__item').on('click', function(e) {
  $('.menu__item_active-item').removeClass("menu__item_active-item");
  $(e.currentTarget).addClass("menu__item_active-item");
  // $(".menu__phoneScreen").removeClass("menu__phoneScreen_vis");

  // ($(this).attr('class') == "menu__item menu__item_favorites menu__item_active-item") ? $(".menu__phoneScreen_favorites").addClass("menu__phoneScreen_vis") :
  // ($(this).attr('class') == 'menu__item menu__item_actions menu__item_active-item') ? $(".menu__phoneScreen_actions").addClass("menu__phoneScreen_vis") :
  // ($(this).attr('class') == 'menu__item menu__item_subscriptions menu__item_active-item') ? $(".menu__phoneScreen_subsribtions").addClass("menu__phoneScreen_vis") :
  // ($(this).attr('class') == 'menu__item menu__item_map menu__item_active-item') ? $(".menu__phoneScreen_map").addClass("menu__phoneScreen_vis") :
  // $(".menu__phoneScreen_list").addClass("menu__phoneScreen_vis");
});
// ===========================================================================



// слайдер логотипов блока партнеры ==========================================
	const swiper3 = new Swiper('.partners__container', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    loopedSlides: 4,
    slideToClickedSlide: true,
    slideClass: "partners__logo",
    loop: true,
    slideActiveClass: "partners__logo_active",
    navigation: {
      nextEl: ".partners__arrow_next",
      prevEl: ".partners__arrow_prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 7,
        loopedSlides: 7,
        spaceBetween: 40,
      }
    },
    // slideActiveClass: "menu__item_active",
    // watchOverflow: true,
  });
// ============================================================================

});