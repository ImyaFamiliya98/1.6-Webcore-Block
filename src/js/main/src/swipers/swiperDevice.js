import Swiper from './swiper.bundle.min.js';
import {swiperPrice} from "./swiperPrice";
import {swiperBrand} from "./swiperBrand";

export let swiperDevice = new Swiper('.device__container', {
  pagination: {
    el: '.device__pagination',
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

swiperDevice.on('beforeResize', function() {
  if (swiperDevice.isBeginning === false && document.documentElement.clientWidth >= 768) {
    swiperDevice.slideTo(0);
  }
});

swiperDevice.init();
