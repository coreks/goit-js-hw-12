import Notiflix from 'notiflix';

function onFetchWarning() {
  return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
}

function onFetchError() {
  return Notiflix.Notify.failure('Oops, there is no country with that name');
}

export default { onFetchWarning, onFetchError };
