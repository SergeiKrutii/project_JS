import { refs } from './refs-api';
import ApiFetch from './fetch';
const debounce = require('lodash.debounce');
const throttle = require('lodash.throttle');
import { countryArray } from './countriesArray';

const api = new ApiFetch();
api.fetchData();

refs.chooseForm.addEventListener('input', onCountry);
refs.startForm.addEventListener('input', debounce(onSearchStart, 1000));

function onSearchStart(e) {
  e.preventDefault();
  api.startSearch = e.currentTarget.elements.startQuery.value;
  api.fetchData();
}

function onCountry(e) {
  e.preventDefault();
  api.chooseCountry = e.currentTarget.elements.chooseQuery.value;
  api.fetchData();
}
