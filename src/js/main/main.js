//swipers
import { swiperPrice } from './swipers/swiperPrice';
import { swiperBrand } from './swipers/swiperBrand';
import { swiperDevice } from './swipers/swiperDevice';

//modals
import { modalCall } from "./modals/modalCall";
import { modalFeedback } from "./modals/modalFeedback";

//blur
import { disableBlurEffect, enableBlurEffect } from "./blur/blur-effect";

//body_scroll
import { body, toggleOffBodyScroll, toggleOnBodyScroll } from "./body_scroll/body_scroll";

swiperPrice.init();
swiperBrand.init();
swiperDevice.init();

const addSeeMoreButtonClickHandler = (swiperClass) => {
  const swiperButtonClass = (swiperClass + '__button').slice(1);
  const swiperButtonEl = document.querySelector('.' + swiperButtonClass);
  const swiperButtonClasses = swiperButtonEl.classList;

    swiperButtonEl.addEventListener('click', function () {
    const swiperWrapper = document.querySelector(swiperClass + '__wrapper');
    const swiperWrapperClasses = swiperWrapper.classList;
    const swiperWrapperCut = (swiperClass + '__wrapper--cut').slice(1);

    if (swiperWrapperClasses.contains(swiperWrapperCut)) {
      swiperButtonClasses.remove(swiperButtonClass + '--show');
      swiperButtonClasses.add(swiperButtonClass + '--hide');
      swiperButtonEl.textContent = 'Скрыть';
      swiperWrapperClasses.remove(swiperWrapperCut);
    } else {
      swiperButtonClasses.remove(swiperButtonClass + '--hide');
      swiperButtonClasses.add(swiperButtonClass + '--show');
      swiperButtonEl.textContent = 'Показать все';
      swiperWrapperClasses.add(swiperWrapperCut);
    }
  });
};

const blurEffect = '.blur-effect';

let brand, device;

const swipersClass = [
  brand = {
    class: '.brand'
  },
  device = {
    class: '.device'
  }
];

for (let i = 0; i < swipersClass.length; i++) {
  const swiperClass = swipersClass[i].class;
  addSeeMoreButtonClickHandler(swiperClass);
}

const addShowModalButtonClickHandler = (modal, elementNumber) => {
  const modalButton = modal.modalShowButtons[elementNumber];

  modalButton.addEventListener('click', () => {
    modal.showModalWindow();
    enableBlurEffect(blurEffect);
    addBlurListener(modal.modalWindow);
    toggleOnBodyScroll();
  });
};

for (let i = 0; i < modalCall.modalShowButtons.length; i++) {
  addShowModalButtonClickHandler(modalCall, i);
}

for (let i = 0; i < modalFeedback.modalShowButtons.length; i++) {
  addShowModalButtonClickHandler(modalFeedback, i);
}

const modals = [modalCall, modalFeedback];

const addHideModalsButtonClickHandler = (modal) => {
  modal.modalCloseButton.addEventListener('click', function() {
    modal.closeModalWindow();
    disableBlurEffect(blurEffect);
    toggleOffBodyScroll();
  });
};

for (let i = 0; i < modals.length; i++) {
  addHideModalsButtonClickHandler(modals[i]);
}

const mobileMenu = document.querySelector('.mobile-menu');
const openMobileMenuButton = document.querySelector('#header__open-mobile-menu-button');

openMobileMenuButton.addEventListener('click', function () {
  mobileMenu.classList.remove('mobile-menu--hidden');
  enableBlurEffect(blurEffect);
  addBlurListener(mobileMenu);
  toggleOnBodyScroll();
});

const closeMobileMenuButton = mobileMenu.querySelector('#mobile-menu__header-close-button');

closeMobileMenuButton.addEventListener('click', function () {
  mobileMenu.classList.add('mobile-menu--hidden');
  disableBlurEffect(blurEffect);
  toggleOffBodyScroll();
});

const addBlurListener = (modal) => {
  const blurEffectEl = document.querySelector(blurEffect);

  blurEffectEl.addEventListener('click', function () {
    disableBlurEffect(blurEffect);
    modal.classList.add(modal.classList[0] + '--hidden');
    toggleOffBodyScroll();
  });
}

(function init() {
  for (let i = 0; i < modals.length; i++) {
    modals[i].closeModalWindow();
  }

  if (!mobileMenu.classList.contains('mobile-menu--hidden')) {
    mobileMenu.classList.add('mobile-menu--hidden');
  }

  disableBlurEffect(blurEffect);
}) ()
