export const body = document.querySelector('body');

export const toggleOnBodyScroll = () => {
  body.classList.add('body__scroll--hidden');
}

export const toggleOffBodyScroll = () => {
  body.classList.remove('body__scroll--hidden');
}
