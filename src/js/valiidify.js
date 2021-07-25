import Notiflix from 'notiflix';

function onFetchWarning() {
  Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
}

function onFetchError() {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}

export { onFetchWarning, onFetchError };
