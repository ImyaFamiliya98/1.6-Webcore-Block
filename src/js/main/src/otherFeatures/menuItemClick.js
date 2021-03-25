const menu = document.querySelector('.menu');
const menuItems = menu.querySelectorAll('.menu__item');
const menuAnchors = menu.querySelectorAll('.menu__link');

const addAnchorMouseHoverListener = (anchor) => {
  anchor.addEventListener('mouseenter', function () {
    anchor.classList.add('menu__link--mouse-hover');
  });

  anchor.addEventListener('mouseleave', function() {
    anchor.classList.remove('menu__link--mouse-hover');
  });
}

const addAnchorClickListener = (anchor) => {
  anchor.addEventListener('click', function() {
    resetActiveItem(menuItems);
    anchor.classList.remove('menu__link--mouse-hover');
    const anchorParentEl = anchor.parentElement;
    anchorParentEl.classList.add('menu__item--active');
  });
};

const resetActiveItem = (items) => {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if(item.classList.contains('menu__item--active')) {
      item.classList.remove('menu__item--active');
    }
  }
};

for (let i = 0; i < menuAnchors.length; i++) {
  addAnchorClickListener(menuAnchors[i]);
  addAnchorMouseHoverListener(menuAnchors[i]);
}

//TODO: something about touch hover
