import { refs } from './refs-api';
import ApiFetch from './fetch';

const api = new ApiFetch();

refs.startForm.addEventListener('input', onSearchStart);
refs.searchCountry.addEventListener('input', onSearchChoose);

function onSearchStart(e) {
  api.startSearch = e.currentTarget.elements.startQuery.value;
  api.fetchData(valueInput).then(response => {});
}
const BASE_URL_FILLTER = 'https://restcountries.com/v2/name';
function onSearchChoose(e) {
  const valueInput = e.target.value.trim();
  console.log(valueInput);
  fetchCon(valueInput);
}
function fetchCounties(id) {
  return fetch(`${BASE_URL_FILLTER}/${id}?fields=name, flags`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
    }
  );
}
// const fetchCon = id => fetchCounties(`{id}`);
function fetchCon(id) {
  fetchCounties(`${id}`);
}
function renderCountry(id) {
  if (id.lenght <= 7) {
    const markup = getCountryMarkupList(id);
    refs.countryList.innerHTML = markup;
  }
}
function getCountryMarkupList(id) {
  return id
    .map(
      ({ name, flags: { svg: svgFlag } }) =>
        `<li class="country-list_list">
    <img width="25" height="16" src="${svgFlag}" alt="${name}">
    <p class="country-list_text">${name}</p>
    </li>`
    )
    .join('');
}
