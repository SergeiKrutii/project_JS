import { refs } from './refs-api';
import ApiFetch from './fetch';
import axios from 'axios';

const api = new ApiFetch();

refs.startForm.addEventListener('input', onSearchStart);

function onSearchStart(e) {
  api.startSearch = e.currentTarget.elements.startQuery.value.trim();
  api.fetchData();
}

dropdown(refs.countryList);

function dropdown(e) {
  e.addEventListener('click', function () {
    e.classList.toggle('active');
  });
}
