import Swiper, { Navigation, Pagination } from 'swiper';
import Alpine from 'alpinejs'

function init() {
  window.Alpine = Alpine;
  Alpine.start();
}

window.addEventListener("load", function () {
  init(); //
  // window.Fancybox = Fancybox;

});