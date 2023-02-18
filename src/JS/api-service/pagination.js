import { refs } from './refs-api';
import { api } from './countryFilter';
import { eventsHits, eventsRandom, eventByName } from './countryFilter';

const option = {
  totalItems: 980,
  itemsPerPage: 20,
  visiblePages: 5,
};

function startPaginationHits() {
  const totalEl = api.totalElement < 980 ? api.totalElement : 980;
  option.totalItems = totalEl;
  const pagination = new tui.Pagination(refs.pagination, option);
  pagination.on('beforeMove', function (e) {
    onScroll();
    api.incrementPage(e.page);
    refs.eventList.innerHTML = '';
    eventsHits();
  });
}

function startPaginationByName(artistName) {
  const totalEl = api.totalElement < 980 ? api.totalElement : 980;
  option.totalItems = totalEl;
  const pagination = new tui.Pagination(refs.pagination, option);
  pagination.on('beforeMove', function (e) {
    onScroll();
    api.incrementPage(e.page);
    refs.eventList.innerHTML = '';
    eventByName(artistName);
  });
}

function startPaginationRandom() {
  const totalEl = api.totalElements < 980 ? api.totalElements : 980;
  option.totalItems = totalEl;
  const pagination = new tui.Pagination(refs.pagination, option);
  pagination.on('beforeMove', function (e) {
    onScroll();
    api.incrementPage(e.page);
    refs.eventList.innerHTML = '';
    eventsRandom();
  });
}

function onScroll() {
  window.scrollTo({
    top: 1,
    behavior: 'smooth',
  });
}

export {
  startPaginationHits,
  startPaginationRandom,
  option,
  onScroll,
  startPaginationByName,
};
