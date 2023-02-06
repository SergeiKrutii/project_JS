import ApiFetch from './fetch';
const api = new ApiFetch();

async function get() {
  const data = await api.fetchData();
  return data;
}
get();
