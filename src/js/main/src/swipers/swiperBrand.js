import Swiper from './swiper.bundle.min.js';
import {swiperPrice} from "./swiperPrice";
import {swiperDevice} from "./swiperDevice";

export let swiperBrand = new Swiper('.brand__container', {
  pagination: {
    el: '.brand__pagination',
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

swiperBrand.on('beforeResize', function() {
  if (swiperBrand.isBeginning === false && document.documentElement.clientWidth >= 768) {
    swiperBrand.slideTo(0);
  }
});

swiperBrand.init();
