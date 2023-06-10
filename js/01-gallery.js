import { galleryItems } from './gallery-items.js';
// Change code below this line

const listEl = document.querySelector('.gallery');

const makeGallery = ({preview, original, description}) => {
   return `<li class="gallery__item">
    <a class="gallery__link" href="${original}" onclick="return false;">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
    </li>`
    
};

const makeGalleryHtml = galleryItems.map(makeGallery).join(' ');

listEl.innerHTML = makeGalleryHtml;

listEl.addEventListener('click', makeModal)

function makeModal (e) {
const modalEl = basicLightbox.create(`
    <img width="1400" height="900" src="${e.target.dataset.source}">
`)
modalEl.show()

listEl.addEventListener('keydown', (e) => {
  if(e.code === 'Escape'){modalEl.close()}
})

}

