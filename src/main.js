import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const input = form.elements['search-text'];
  const query = input.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Hello!',
      message: 'The search field cannot be empty',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (!data.hits || !data.hits.length) {
        iziToast.info({
          title: '',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong, please try again.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
});
