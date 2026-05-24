export class Modal {
  static openModalsCount = 0; 

  constructor(modalId, overlayId) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById(overlayId);
  }

  open() {
    if (!this.modal) return;
    this.modal.classList.add('modal-showed');
    
    if (Modal.openModalsCount === 0 && this.overlay) {
      this.overlay.classList.add('overlay-showed');
    }
    
    Modal.openModalsCount++;
  }

  close() {
    if (!this.modal || !this.modal.classList.contains('modal-showed')) return;

    this.modal.classList.remove('modal-showed');
    Modal.openModalsCount--;

    if (Modal.openModalsCount === 0 && this.overlay) {
      this.overlay.classList.remove('overlay-showed');
    }
  }

  initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', () => this.open());
    }
  }

  initClose() {
    const closeButton = this.modal.querySelector('#closeModalBtn');
    if (closeButton) {
      closeButton.addEventListener('click', () => this.close());
    }

    if (this.overlay) {
      this.overlay.addEventListener('click', () => this.close());
    }
  }
}
