import Swiper, { Navigation, Pagination } from 'swiper';
import Alpine from 'alpinejs'

function init() {
  window.Alpine = Alpine;
  Alpine.start();

  var swipers = document.querySelectorAll('.swiper');

  swipers.forEach(function (e) {

    const swiper = new Swiper('#' + e.id, {
      modules: [Navigation, Pagination],
      grabCursor: true,
      preloadImages: true,
      preventClicks: true,
      preventClicksPropagation: true,
      slidesPerView: 3,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: '.next-' + e.id,
        prevEl: '.prev-' + e.id,
      },

      breakpoints: {
        320: {
          spaceBetween: 16,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 50,
        },
        766: {
          spaceBetween: 20,
          slidesOffsetBefore: 10,
          slidesOffsetAfter: 200,
          pagination: false
        },
        1247: {
          spaceBetween: 20,
          slidesOffsetBefore: 40,
          slidesOffsetAfter: 200,
          pagination: false
        },
        1440: {
          spaceBetween: 20,
          slidesOffsetBefore: 40,
          slidesOffsetAfter: 200,
          pagination: false,
        },
      },
    });
  });
}

window.addEventListener("load", function () {
  init(); //
  // window.Fancybox = Fancybox;

});