// import Notiflix from 'notiflix';
import { createEvent, appendMarkupModal } from './create-event';
const axios = require('axios').default;

export default class ApiFetch {
  constructor() {
    this.URL = 'https://app.ticketmaster.com/discovery/v2/events.json?';
    this.KEY = 'apikey=LEkrcdy1DLz9DyNgc9jAo3lbh1silZQu';
    this.page = 1;
    this.startSearch = '';
    this.chooseCountry = '';
  }

  async fetchData(url) {
    try {
      const response = await axios.get(url);
      const data = response.data;
      const {
        _embedded: { events },
      } = data;
      console.log(events);
      createEvent(events);
    } catch (error) {}
  }

  async fetchDataByIdOrName(url) {
    try {
      const response = await axios.get(url);
      const {
        _embedded: { events },
      } = response.data;
      
      createEvent(events);
    } catch (error) {
      console.log(error);
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get choose() {
    return this.startSearch;
  }

  set choose(newStart) {
    this.startSearch = newStart;
  }
}
