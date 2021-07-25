import coutryCardTpl from '../templates/rest-countries.hbs';
import countriesList from '../templates/country-list.hbs';
import getRefs from './getRefs.js';

const refs = getRefs();

function renderCountryCard(country) {
  const markup = coutryCardTpl(...country);
  refs.cardContainer.innerHTML = markup;
}

function renderCounrtiesList(country) {
  const markupList = countriesList(country);
  refs.cardContainer.innerHTML = markupList;
}

function clearContainer() {
  refs.cardContainer.innerHTML = '';
}

export { renderCountryCard, renderCounrtiesList, clearContainer };
