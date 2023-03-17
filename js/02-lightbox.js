import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Знаходимо галерею та її елементи "li"
const galleryEl = document.querySelector(".gallery");

// Додаємо розмітку в структуру
galleryEl.innerHTML = createListImg(galleryItems);

// Функція створення розмітки "li" списку в HTML
function createListImg(images) {
  return images
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        </li>`
    )
    .join("");
}

// бібліотека SimpleLightbox
const lightbox = new SimpleLightbox(".gallery a", {
  // captions: true,
  captionsData: "alt",
  captionDelay: 250,
  // nav: true,
  // close: true,
  // overlay: true,
});
