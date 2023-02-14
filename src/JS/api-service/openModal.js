import { refs } from './refs-api';

refs.divBlock.addEventListener('click', openModal);
refs.spanModal.addEventListener('click', closeModal);

// console.log(window);

function openModal(e) {
    console.dir(e);
    // console.dir(refs.eventList)
  if (
    e.target.className === 'event__card' ||
    e.target.className === 'event__name'
  ) {
    refs.modal.style.display = 'block';
    console.log('это лишка');
  }
}

function closeModal() {
  refs.modal.style.display = 'none';
}
// When the user clicks on <span> (x), close the modal

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == event) {
    modal.style.display = 'none';
  }
};
