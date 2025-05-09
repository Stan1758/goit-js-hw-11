
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.gallery a');

function getGalleryContainer() {
  return document.querySelector('.gallery');
}
function getLoader() {
  return document.querySelector('.loader');
}

export function createGallery(images) {
  const galleryContainer = document.querySelector('.gallery');
  
  const markup = images.map(image => `
    <li class="gallery-item">
      <a href="${image.largeImageURL}" title="${image.tags}">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      </a>
      <div class="info">
  <div class="info-item">
    <p><b>Likes</b></p>
    <p class="value">${image.likes}</p>
  </div>
  <div class="info-item">
    <p><b>Views</b></p>
    <p class="value">${image.views}</p>
  </div>
  <div class="info-item">
    <p><b>Comments</b></p>
    <p class="value">${image.comments}</p>
  </div>
  <div class="info-item">
    <p><b>Downloads</b></p>
    <p class="value">${image.downloads}</p>
  </div>
</div>
    </li>
  `).join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  const galleryContainer = getGalleryContainer();
  galleryContainer.innerHTML = '';
}

// В render-functions.js

export function showLoader() {
  const wrapper = document.querySelector('.loader-wrapper');
  if (wrapper) wrapper.style.display = 'flex';
}

export function hideLoader() {
  const wrapper = document.querySelector('.loader-wrapper');
  if (wrapper) wrapper.style.display = 'none';
}


