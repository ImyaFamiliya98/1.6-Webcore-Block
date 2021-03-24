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
