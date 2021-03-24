import Swiper from './swiper.bundle.min.js';
import {swiperBrand} from "./swiperBrand";
import {swiperDevice} from "./swiperDevice";

export let swiperPrice = new Swiper('.price__container', {
  pagination: {
    el: '.price__pagination',
  },
  slidesPerView: 'auto',
  spaceBetween: 16,
  init: false,
  breakpoints: {
    768: {
      spaceBetween: 24,
      allowTouchMove: false,
      preventClicks: false,
      simulateTouch: false
    },
    1120: {
      spaceBetween: 32,
      allowTouchMove: false,
      preventClicks: false,
      simulateTouch: false
    }
  }
});

swiperPrice.on('beforeResize', function() {
  if (swiperPrice.isBeginning === false && document.documentElement.clientWidth >= 768) {
    swiperPrice.slideTo(0);
    swiperPrice.destroy();
  }
});

swiperPrice.init();
