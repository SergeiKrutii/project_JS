import { refs } from './refs-api';
import ApiFetch from './fetch';
import axios from 'axios';

const api = new ApiFetch();

refs.startForm.addEventListener('input', onSearchStart);
refs.countryListLi.addEventListener('click', e => clickCountryItem(e));

function onSearchStart(e) {
  api.startSearch = e.currentTarget.elements.startQuery.value.trim();
}

dropdown(refs.countryList);

function dropdown(e) {
  e.addEventListener('click', function () {
    e.classList.toggle('active');
  });
}

function clickCountryItem(e) {
  if (e.target.nodeName === 'LI') {
    api.chooseCountry = e.target.dataset.country;
    refs.countryList.textContent = e.target.textContent;
    refs.countryList.classList.remove('active');
  }
}
