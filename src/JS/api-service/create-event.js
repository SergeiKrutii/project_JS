import ApiFetch from './fetch';
import { makeData } from './markup';
import { refs } from './refs-api';
import evtTpl from '../../templates/mainEvent.hbs';
import evtModTpl from '../../templates/modalEvent.hbs';

async function createEvent(events) {
  const mark = events.map(event => {
    return makeData(event);
  });

  if (events.length !== 1) {
    refs.eventList.innerHTML = '';
    appendMarkup(mark);
    return;
  }

  refs.divModal.innerHTML = '';
  appendMarkupModal(mark);
}

function appendMarkup(events) {
  refs.eventList.insertAdjacentHTML('beforeend', evtTpl(events));
}

function appendMarkupModal(events) {
  refs.divModal.insertAdjacentHTML('beforeend', evtModTpl(events));
}

export { createEvent, appendMarkupModal };
