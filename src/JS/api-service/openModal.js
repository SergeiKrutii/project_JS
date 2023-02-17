import { refs } from './refs-api';

refs.divBlock.addEventListener('click', openModal);
refs.svgModal.addEventListener('click', closeModal);

function openModal(e) {
  if (
    e.target.className === 'event__card' ||
    e.target.className === 'event__name'
  ) {
    refs.modal.style.display = 'block';
  }
}

function closeModal() {
  refs.modal.style.display = 'none';
}

window.onclick = function (e) {
  if (e.target.className === 'modal') {
    refs.modal.style.display = 'none';
  }
};
