import coutryCardTpl from '../templates/rest-countries.hbs';
const _debounce = require('lodash.debounce');

const refs = {
  cardContainer: document.querySelector('.card-container'),
  searchCountry: document.querySelector('.country-form-input'),
};

refs.searchCountry.addEventListener('input', _debounce(onSearch, 300));

function onSearch(e) {
  e.preventDefault();

  const form = e.target;
  const searchQuery = form.value;

  fetchCountries(searchQuery)
    .then(renderCountryCard)
    .catch(error => {
      console.log(error);
    });
  // .finally(() => {
  //   reset(searchQuery);
  // });
}

// function fetchCountries() {
//   fetch('https://restcountries.eu/rest/v2/name/ukraine')
//     .then(response => {
//       return response.json();
//     })
//     .then(renderCountryCard)
//     .catch(error => {
//       console.log(error);
//     });
// }

function fetchCountries(name) {
  return fetch(`https://restcountries.eu/rest/v2/name/${name}`).then(response => {
    return response.json();
  });
}

function renderCountryCard(name) {
  const markup = coutryCardTpl(...name);
  refs.cardContainer.innerHTML = markup;
}

// renderCountryCard('Colombia');
