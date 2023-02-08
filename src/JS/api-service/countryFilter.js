import { refs } from './refs-api';
import ApiFetch from './fetch';
import axios from 'axios';

const api = new ApiFetch();

refs.startForm.addEventListener('input', onSearchStart);
refs.searchCountry.addEventListener('input', inputValue);

function onSearchStart(e) {
  api.startSearch = e.currentTarget.elements.startQuery.value.trim();
  api.fetchData();
}

function inputValue(e) {
  const valueIn = e.target.value.trim();
  console.log('inputchoose', valueIn);
  fetchCountries(valueIn);
}

function renderCountryList(country) {
  const markup = getCountryMarkupList(country);
  refs.countryList.innerHTML = markup;
}

const BASE_URL_FILLTER = 'https://restcountries.com/v2/name';

function fetchCountries(country) {
  return fetch(`${BASE_URL_FILLTER}/${country}?fields=name,flags,altSpellings`)
    .then(respons => {
      if (respons.ok) {
        return respons.json();
      }
    })
    .then(respons => {
      renderCountryList(respons);
    });
}

// function fetchData(country) {
//   fetchCountries(`${country}`);
// }

function getCountryMarkupList(countries) {
  return countries
    .map(
      ({ name, flags: { svg: svgFlag } }) =>
        `<li class="country-list_list">
    <img width="25" height="16" src="${svgFlag}" alt="${name}">
    <p class="country-list_text">${name}</p>
    </li>`
    )
    .join('');
}

// const BASE_URL_FILLTER = 'https://restcountries.com/v2/name';

// function onSearchChoose(e) {
//   const valueInput = e.target.value.trim();
//   console.log(valueInput);
//   fetchCon(valueInput);
// }
// function fetchCountries(country) {
//   const fetchD = axios.get(
//     `${BASE_URL_FILLTER}/${country}?fields=name,altSpellings`
//   );
//   console.log(fetchD);
//   const data = fetchD;
//   console.log(data);
//   return data;
// }
// // const fetchCon = id => fetchCounties(`{id}`);
// function fetchCon(country) {
//   fetchCountries(`${country}`);
// }
// function renderCountry(country) {
//   if (country.lenght <= 7) {
//     const markup = getCountryMarkupList(country);
//     refs.countryList.innerHTML = markup;
//   }
// }
// function getCountryMarkupList(country) {
//   return country
//     .map(
//       ({ name, flags: { svg: svgFlag } }) =>
//         `<li class="country-list_list">
//     <img width="25" height="16" src="${svgFlag}" alt="${name}">
//     <p class="country-list_text">${name}</p>
//     </li>`
//     )
//     .join('');
// }
