// !=================================import libraries & galary ==================================
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// !======================= Block "Main programm" ===================================
const gallery = document.querySelector(".gallery");
const allImages = buildGallery(galleryItems);
gallery.insertAdjacentHTML("beforeend", allImages);

function buildGallery(arrGalary) {
    return galleryItems.map(({ preview, original, description }) => {
           return ` <li>
                      <a class="gallery__item" href="${original}">
                      <img class="gallery__image" src="${preview}" alt="${description}" />
                      </a>
                    </li>`
        }).join('');
};
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoomFactor: 0.1
});
console.log(galleryItems);
// !================================= EOF =========================================
