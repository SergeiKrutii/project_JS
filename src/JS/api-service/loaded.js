import { refs } from './refs-api';

const bodyFi = document.querySelector('.no-js');
bodyFi.classList.remove('no-js');
bodyFi.classList.add('js');

function loadIn(div) {
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelector(div).classList.add('loading');
  });
}

loadIn('.block');
