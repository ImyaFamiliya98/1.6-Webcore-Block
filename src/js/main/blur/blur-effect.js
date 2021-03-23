export const enableBlurEffect = (element) => {
  const blurElement = document.querySelector(element);
  const hiddenClass = `${element}--hidden`.slice(1);
  blurElement.classList.remove(hiddenClass);
};

export const disableBlurEffect = (element) => {
  const blurElement = document.querySelector(element);
  const hiddenClass = `${element}--hidden`.slice(1);
  blurElement.classList.add(hiddenClass);
};
