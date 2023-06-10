import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector('.gallery');

function listArray ({preview, original, description}) {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}" onclick="return false;">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`
}

const listMarkup = galleryItems.map(listArray).join(" ")

listEl.innerHTML = listMarkup;

const lightbox = new SimpleLightbox('.gallery a', { 
    captionDelay: 250,
    captionsData: 'alt',
});

