import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview:
      'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600',
    original:
      'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1600',
    description: 'Sunrise',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600',
    original:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600',
    description: 'Mountains',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600',
    original:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600',
    description: 'Mountain Lake',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600',
    original:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600',
    description: 'Beach',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600',
    original:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600',
    description: 'Forest',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600',
    original:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600',
    description: 'Nature',
  },
];

const gallery = document.querySelector('.gallery');

const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `
  )
  .join('');

gallery.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  nav: true,
  loop: true,
  enableKeyboard: true,
});

lightbox.on('error.simplelightbox', function (event) {
  console.error('Ошибка загрузки изображения:', event);
});


