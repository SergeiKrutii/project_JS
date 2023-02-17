import { makeData } from './markup';
import { refs } from './refs-api';
import evtTpl from '../../templates/mainEvent.hbs';


async function createEvent(events) {
  refs.eventList.innerHTML = '';
  
  const mark = events.map(event => {
    return makeData(event);
  });
  console.log('mark :>> ', mark);

  appendMarkup(mark);
}

function appendMarkup(events) {
  refs.eventList.insertAdjacentHTML('beforeend', evtTpl(events));
}

function appendMarkupModal(events) {
  refs.divModal.insertAdjacentHTML('beforeend', evtModTpl(events));
}

export { createEvent, appendMarkupModal };
