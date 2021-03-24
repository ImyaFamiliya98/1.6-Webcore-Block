//swipers
import './src/swipers/swiperPrice';
import './src/swipers/swiperBrand';
import './src/swipers/swiperDevice';

//swipers functional
import './src/swipers/swipersSeeMore'

//modals
import { modalCall } from "./src/modals/modalCall";
import { modalFeedback } from "./src/modals/modalFeedback";
import { mobileMenu } from "./src/modals/mobileMenu";

//blur
import { disableBlurEffect, enableBlurEffect, blurElement } from "./src/blur/blur-effect";

//other
import './src/otherFeatures/descriptionSeeMore';
import './src/otherFeatures/menuItemClick';

const addShowModalButtonClickHandler = (modal, elementNumber) => {
  const modalButton = modal.modalShowButtons[elementNumber];

  modalButton.addEventListener('click', () => {
    closeAllModal();
    modal.showModalWindow();
    enableBlurEffect();
  });
};

const addHideModalsButtonClickHandler = (modal) => {
  modal.modalCloseButton.addEventListener('click', function() {
    modal.closeModalWindow();
    disableBlurEffect();
  });
};

const modals = [modalCall, modalFeedback, mobileMenu];

for (let i = 0; i < modals.length; i++) {
  const modal = modals[i];

  for (let j = 0; j < modal.modalShowButtons.length; j++) {
    addShowModalButtonClickHandler(modal, j);
  }
}

for (let i = 0; i < modals.length; i++) {
  addHideModalsButtonClickHandler(modals[i]);
}

blurElement.addEventListener('click', function () {
  closeAllModal();
  disableBlurEffect();
});

const closeAllModal = () => {
  for (let i = 0; i < modals.length; i++) {
    const modal = modals[i];
    modal.closeModalWindow();
  }
};
