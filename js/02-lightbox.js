import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Знаходимо галерею та її елементи "li"
const galleryEl = document.querySelector(".gallery");

// Додаємо розмітку в структуру
galleryEl.innerHTML = createListImg(galleryItems);

// Вішаємо слухача подій (клік на "li") на список "ul" (вспливання події)
galleryEl.addEventListener("click", onGalleryElementClick);

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

function onGalleryElementClick(evt) {
  // заборона переходу за посиланням
  evt.preventDefault();

  // Перевірка, щоб клік був на зображенні
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  // Отримання url великого зображення
  const largeImageUrl = evt.target.dataset.source;

  const gallery = new SimpleLightbox(".gallery a", {
    // captions: true,
    captionsData: "alt",
    captionDelay: 250,
    // nav: true,
    // close: true,
    // overlay: true,
  });
}
