import ApiFetch from './fetch';
import { makeData } from './markup';
import { refs } from './refs-api';
import evtTpl from '../../templates/mainEvent.hbs';
const newClass = new ApiFetch();

async function createEvent() {
  const {
    _embedded: { events },
  } = await newClass.fetchData();

  const mark = events.map(event => {
    return makeData(event);
  });
  console.log('mark :>> ', mark);

  appendMarkup(mark);
}

function appendMarkup(events) {
  refs.eventList.insertAdjacentHTML('beforeend', evtTpl(events));
}

createEvent();
