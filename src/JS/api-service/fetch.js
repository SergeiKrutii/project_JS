
const axios = require('axios').default;

export default class ApiFetch {
  constructor() {
    this.URL = 'https://app.ticketmaster.com/discovery/v2/events.json?';
    this.KEY = 'apikey=LEkrcdy1DLz9DyNgc9jAo3lbh1silZQu';
    this.page = 1;
    this.startSearch = '';
    this.chooseCountry = '';
  }

  async fetchData() {
    try {
      const response = await axios.get(
        `${this.URL}${this.KEY}&locale=${this.chooseCountry}`
      );
      const data = response.data;
      console.log(data._embedded.events);
      return data;
    } catch (error) {}
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get choose() {
    return this.chooseCountry;
  }

  set choose(newChoose) {
    this.chooseCountry = newChoose;
  }
}

