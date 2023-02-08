import { refs } from './refs-api';
import ApiFetch from './fetch';
const api = new ApiFetch();

refs.startForm.addEventListener('input', onSearchStart);

function onSearchStart(e) {
  api.startSearch = e.currentTarget.elements.startQuery.value;
  api.fetchData();
}
