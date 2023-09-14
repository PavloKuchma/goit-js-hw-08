import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector('.gallery');

function renderGallery(arr) {
  const renderList = arr
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item" style="list-style: none">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`;
    })
    .join('');
  listEl.insertAdjacentHTML('beforeend', renderList);
}
renderGallery(galleryItems);

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
