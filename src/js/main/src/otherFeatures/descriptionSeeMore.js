const descriptionButton = document.querySelector('.description__button');

descriptionButton.addEventListener('click', function () {
  const descriptiontext = document.querySelector('.description__text');
  const descriptiontextCut = 'description__text--cut';

  if (descriptiontext.classList.contains(descriptiontextCut)) {
    descriptiontext.classList.remove(descriptiontextCut);
    descriptionButton.textContent = 'Скрыть';
    descriptionButton.classList.add('description__button--hide');
  } else {
    descriptiontext.classList.add(descriptiontextCut);
    descriptionButton.textContent = 'Читать далее';
    descriptionButton.classList.remove('description__button--hide');
  }
});
