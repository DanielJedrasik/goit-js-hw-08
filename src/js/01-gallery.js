// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
console.log(galleryItems);

const fotoGallery = document.querySelector('.gallery');
const getFotoGallery = galleryItems
  .map(
    ({
      preview,
      original,
      description,
    }) => `<li class="gallery__item"><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    </li>`
  )
  .join(' ');
fotoGallery.insertAdjacentHTML('beforeend', getFotoGallery);
document.addEventListener('DOMContentLoaded', function () {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'outside',
    captionDelay: 250,
    nav: false,
    close: false,
    showCounter: false,
  });
});
