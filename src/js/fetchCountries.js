import onFetchError from './valiidify.js';
import clearContainer from './renderMarkup.js';

const BASE_URL = 'https://restcountries.eu/rest/v2';

function fetchCountries(name) {
  const url = `${BASE_URL}/name/${name}?fields=name;capital;population;flag;languages`;

  return fetch(url).then(response => {
    if (!response.ok) {
      clearContainer();
      throw new Error(onFetchError());
    }
    return response.json();
  });
}

export default { fetchCountries };
