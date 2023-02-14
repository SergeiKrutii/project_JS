import { refs } from './refs-api';
import ApiFetch from './fetch';
import axios from 'axios';
import { debounce } from 'lodash';
import { createEvent } from './create-event';

const api = new ApiFetch();

refs.startForm.addEventListener('input', debounce(onSearchStart, 500));
refs.countryListLi.addEventListener('click', e => clickCountryItem(e));

async function onSearchStart(e) {
  api.choose = refs.startForm[0].value.trim();

  const {
    _embedded: { events },
  } = await api.fetchData();
  console.log(api.choose)
 createEvent(events);
}

dropdown(refs.countryList);

function dropdown(e) {
  e.addEventListener('click', function () {
    e.classList.toggle('active');
  });
}

// function clickCountryItem(e) {
//   if (e.target.nodeName === 'LI') {
//     api.chooseCountry = e.target.dataset.country;
//     refs.countryList.textContent = e.target.textContent;
//     refs.countryList.classList.remove('active');
//   }
// }
