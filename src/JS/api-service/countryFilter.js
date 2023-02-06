import { refs } from './refs-api';
import ApiFetch from './fetch';

const api = new ApiFetch();
api.fetchData();

refs.chooseForm.addEventListener('submit', onCountry);

function onCountry(e) {
  e.preventDefault();
  api.chooseCountry = e.currentTarget.elements.chooseQuery.value;
  api.fetchData();
}
