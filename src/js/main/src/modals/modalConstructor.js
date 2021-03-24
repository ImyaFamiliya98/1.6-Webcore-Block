export default function Modal(container, showButton, closeButton) {
  const modal = this;

  modal.modalClass = '.' + container;
  modal.modalClassHidden = container + '--hidden';
  modal.modalWindow = document.querySelector(modal.modalClass);
  modal.modalShowButtons = document.querySelectorAll(showButton);
  modal.modalCloseButton = modal.modalWindow.querySelector(closeButton) || '';
  modal.isVisible = !modal.modalWindow.classList.contains(modal.modalClassHidden);

  modal.showModalWindow = () => {
    modal.modalWindow.classList.remove(modal.modalClassHidden);
    modal.isVisible = true;
  };

  modal.closeModalWindow = () => {
    modal.modalWindow.classList.add(modal.modalClassHidden);
    modal.isVisible = false;
  };

  return modal;
}
