import { refs } from './refs-api';
import { api } from './countryFilter';
import { startPaginationByName } from './pagination';
import { eventById, eventByName } from './countryFilter';

refs.divBlock.addEventListener('click', openModal);
refs.svgModal.addEventListener('click', closeModal);
window.addEventListener('click', onLoadMorAuthor);

console.log(refs.body);

function openModal(e) {
  let dataId = '';
  dataId = e.target.offsetParent.dataset.id;
  if (
    e.target.className === 'event__card' ||
    e.target.className === 'event__name' ||
    e.target.className === 'event__image'
  ) {
    refs.modal.style.display = 'block';
    refs.body.style.overflowY = 'hidden';
    eventById(dataId);
  }
}

function onLoadMorAuthor(e) {
  const artistName = e.target;

  if (artistName.classList.contains('modal__authorLink')) {
    api.artistName = e.target.dataset.artname;
    eventByName(api.artistName);
    closeModal();
    startPaginationByName(api.artistName);
    api.artistName = '';
  }
}

function closeModal() {
  refs.modal.style.display = 'none';
  refs.body.style.overflowY = 'auto';
}

window.onclick = function (e) {
  if (e.target.className === 'modal') {
    refs.modal.style.display = 'none';
    refs.body.style.overflowY = 'auto';
  }
};
