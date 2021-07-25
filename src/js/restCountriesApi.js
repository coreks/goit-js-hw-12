const _debounce = require('lodash.debounce');

import API from './fetchCountries.js';
import getRefs from './getRefs.js';
import { renderCountryCard, renderCounrtiesList, clearContainer } from './renderMarkup.js';
import { onFetchWarning, onFetchError } from './valiidify.js';

const refs = getRefs();

refs.searchCountry.addEventListener('input', _debounce(onSearch, 300));

function onSearch(e) {
  e.preventDefault();

  const form = e.target;
  const searchQuery = form.value;

  if (searchQuery.length === 0) {
    clearContainer();
    return;
  }

  API.fetchCountries(searchQuery).then(getCountries).catch(console.log);
}

function getCountries(country) {
  if (country.length >= 2 && country.length <= 10) {
    renderCounrtiesList(country);
    return;
  }

  if (country.length === 1) {
    renderCountryCard(country);
    return;
  }

  if (country.length > 10) {
    onFetchWarning();
    return;
  }

  if (!country) {
    clearContainer();
    onFetchError();
    return;
  }
}
