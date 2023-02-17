import { refs } from './refs-api';
import ApiFetch from './fetch';
import { debounce } from 'lodash';

const api = new ApiFetch();

refs.startForm.addEventListener('input', debounce(onSearchStart, 500));
refs.countryListLi.addEventListener('click', e => clickCountryItem(e));

async function onSearchStart() {
  api.startSearch = refs.startForm[0].value.trim();
  if (api.startSearch.length === 0) {
    eventsRandom();
  }
  {
    eventsHits();
  }
}

async function clickCountryItem(e) {
  if (e.target.nodeName === 'LI') {
    api.chooseCountry = e.target.dataset.country;
    refs.countryList.textContent = e.target.textContent;
    refs.countryList.classList.remove('active');
    eventsHits();
  }
}
async function eventById(id) {
  api.fetchDataByIdOrName(`${api.URL}${api.KEY}&id=${id}`);
}

async function eventByName(artistName) {
  api.fetchDataByIdOrName(`${api.URL}${api.KEY}&keyword=${artistName}`);
}

async function eventsHits() {
  api.fetchData(
    `${api.URL}${api.KEY}&keyword=${api.startSearch}&countryCode=${api.chooseCountry}`
  );
}

async function eventsRandom() {
  api.fetchData(`${api.URL}${api.KEY}&classificationName=music&sort=random`);
}

if (!api.startSearch & !api.chooseCountry) {
  eventsRandom();
}

dropdown(refs.countryList);

function dropdown(e) {
  e.addEventListener('click', function () {
    e.classList.toggle('active');
  });
}

export { eventById, eventByName };
