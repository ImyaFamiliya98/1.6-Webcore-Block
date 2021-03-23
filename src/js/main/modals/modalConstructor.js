export default function Modal(container, showButton, closeButton) {
  const modal = this;

  modal.modalClass = '.' + container;
  modal.modalClassHidden = container + '--hidden';
  modal.modalWindow = document.querySelector(modal.modalClass);
  modal.modalShowButtons = document.querySelectorAll(showButton);
  modal.modalCloseButton = modal.modalWindow.querySelector(closeButton);
  modal.isModalVisible = false;

  modal.showModalWindow = () => {
    modal.modalWindow.classList.remove(modal.modalClassHidden);
    modal.isModalVisible = true;
  };

  modal.closeModalWindow = () => {
    modal.modalWindow.classList.add(modal.modalClassHidden);
    modal.isModalVisible = false;
  };

  return modal;
}
