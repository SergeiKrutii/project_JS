import ApiFetch from './fetch';
import { makeData } from './markup';
import { refs } from './refs-api';
const newClass = new ApiFetch();
import evtMarkup from '../../templates/eventsMarkup.hbs';

const Handlebars = require('handlebars');

console.log(Handlebars);
console.log(evtMarkup);
async function createEvent() {
  const {
    _embedded: { events },
  } = await newClass.fetchData();
  console.log(events[0]);
  const mark = events.map(event => {
    return makeData(event);
  });
  console.log('mark', mark);
  // const template = Handlebars.precompile(evtMarkup(events[0]));

  appendMarkup(mark);
}

function appendMarkup(events) {
 const template = Handlebars.compile(evtMarkup);
  console.log(template)
  const any = ['a1','s2']
  const tru = template({kuy: 'asda'}); 
  console.log(tru)

  // refs.eventList.insertAdjacentHTML(
  //   'beforeend',
  //   events.map(elem => evtMarkup(elem))
  // );
}

createEvent();
