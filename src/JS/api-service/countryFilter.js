import { refs } from './refs-api';
import ApiFetch from './fetch';
import { debounce } from 'lodash';
import { startPaginationHits, startPaginationRandom } from './pagination';
import country from '../../templates/country.hbs';
import countriesArray from './countriesArray';
const api = new ApiFetch();

refs.startForm.addEventListener('input', debounce(onSearchStart, 500));
refs.countryListLi.addEventListener('click', e => clickCountryItem(e));
const vw = document.documentElement.clientWidth;

async function onSearchStart() {
  api.startSearch = refs.startForm[0].value.trim();
  if (api.startSearch.length === 0) {
    eventsRandom();
  }
  {
    eventsHits();
    startPaginationHits();
  }
}
refs.countryListLi.innerHTML = country({ countriesArray });

async function clickCountryItem(e) {
  if (e.target.nodeName === 'LI') {
    api.chooseCountry = e.target.dataset.country;
    refs.countryList.textContent = e.target.textContent;
    refs.countryList.classList.remove('active');
    api.resetPage();
    eventsHits();
    startPaginationHits();
  }
}

async function eventById(id) {
  api.fetchDataByIdOrName(`${api.URL}${api.KEY}&id=${id}`);
}

async function eventByName(artistName) {
  if (vw >= 768 && vw <= 1199) {
    api.size = 21;
    api.fetchDataByIdOrName(
      `${api.URL}${api.KEY}&size=${api.size}&keyword=${artistName}`
    );
    api.size = 20;
    return;
  }

  api.fetchDataByIdOrName(`${api.URL}${api.KEY}&keyword=${artistName}`);
}

if (!api.startSearch & !api.chooseCountry) {
  eventsRandom();
  startPaginationRandom();
}

async function eventsHits() {
  if (vw >= 768 && vw <= 1199) {
    api.size = 21;
    api.fetchData(
      `${api.URL}${api.KEY}&keyword=${api.startSearch}
    &countryCode=${api.chooseCountry}&size=${api.size}&page=${api.page}`
    );
    api.size = 20;
    return;
  }

  api.fetchData(
    `${api.URL}${api.KEY}&keyword=${api.startSearch}&countryCode=${api.chooseCountry}&page=${api.page}`
  );
}

async function eventsRandom() {
  if (vw >= 768 && vw <= 1199) {
    api.size = 21;
    api.fetchData(
      `${api.URL}${api.KEY}&size=${api.size}&classificationName=music&sort=random&page=${api.page}`
    );
    api.size = 20;
    return;
  }
  api.fetchData(
    `${api.URL}${api.KEY}&classificationName=music&sort=random&page=${api.page}`
  );
}

dropdown(refs.countryList);

function dropdown(e) {
  e.addEventListener('click', function () {
    e.classList.toggle('active');
  });
}

export { eventsHits, eventsRandom, api, eventById, eventByName };
