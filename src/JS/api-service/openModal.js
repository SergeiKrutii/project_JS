import { refs } from './refs-api';
import ApiFetch from './fetch';
import { eventById, eventByName } from './countryFilter';

refs.divBlock.addEventListener('click', openModal);
refs.svgModal.addEventListener('click', closeModal);
refs.moreBtnModal.addEventListener('click', onLoadMorAuthor);

let artistName = '';

console.log('🚀 ~ out', artistName);
function openModal(e) {
  let dataId = '';
  dataId = e.target.offsetParent.dataset.id;

  artistName = e.target.offsetParent.dataset.artname;

  if (
    e.target.className === 'event__card' ||
    e.target.className === 'event__name' ||
    e.target.className === 'event__image'
  ) {
    refs.modal.style.display = 'block';
    eventById(dataId);
  }
}

function onLoadMorAuthor() {
  
  console.log(eventByName(artistName))
  closeModal();
}

function closeModal() {
  refs.modal.style.display = 'none';
}

window.onclick = function (e) {
  if (e.target.className === 'modal') {
    refs.modal.style.display = 'none';
  }
};


