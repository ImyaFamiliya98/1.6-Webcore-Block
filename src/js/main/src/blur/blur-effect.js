export const blurElement = document.querySelector('.blur-effect');

export const enableBlurEffect = () => {
  blurElement.classList.remove('blur-effect--hidden');
  toggleOnBodyScroll();
};

export const disableBlurEffect = () => {
  blurElement.classList.add('blur-effect--hidden');
  toggleOffBodyScroll();
};

const body = document.querySelector('body');

const toggleOnBodyScroll = () => {
  body.classList.add('body__scroll--hidden');
}

const toggleOffBodyScroll = () => {
  body.classList.remove('body__scroll--hidden');
}
