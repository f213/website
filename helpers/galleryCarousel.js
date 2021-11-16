/* eslint-disable no-restricted-syntax, no-loop-func */
const galleryCarousel = {
  init() {
    const galleries = document.querySelectorAll('.kg-gallery-container');

    for (const gallery of galleries) {
      const slides = gallery.querySelectorAll('.kg-gallery-image img');
      galleryCarousel.addBullets(gallery, slides, slides.length);
      galleryCarousel.toggleSlide(gallery, slides);
    }
  },

  addBullets(gallery, slides, count) {
    const bulletsElement = document.createElement('ul');

    bulletsElement.classList.add('bullets');
    gallery.append(bulletsElement);

    for (let index = 0; index < count; index += 1) {
      const bulletsItem = document.createElement('li');
      bulletsItem.classList.add('bullets-item');
      bulletsElement.append(bulletsItem);
    }
    const bullets = gallery.querySelectorAll('.bullets-item');
    galleryCarousel.addGalleryEventListeners(gallery, slides, bullets);
  },

  addGalleryEventListeners(gallery, slides, bullets) {
    let activeSlideIndex = 1;

    for (const [index, item] of bullets.entries()) {
      item.addEventListener('click', (event_) => {
        event_.stopPropagation();
        activeSlideIndex = index < bullets.length - 1 ? index + 1 : 0;
        galleryCarousel.toggleSlide(gallery, slides, index);
      });
    }

    gallery.addEventListener('click', () => {
      galleryCarousel.toggleSlide(gallery, slides, activeSlideIndex);
      if (activeSlideIndex < slides.length - 1) {
        activeSlideIndex += 1;
        return;
      }
      activeSlideIndex = 0;
    });
  },

  toggleSlide(gallery, slides, activeSlideIndex = 0) {
    for (const [index, slide] of slides.entries()) {
      slide.classList.remove('active');
      if (index === activeSlideIndex) {
        slide.classList.add('active');
        galleryCarousel.highlightActiveBullet(gallery, index);
      }
    }
  },

  highlightActiveBullet(gallery, index) {
    const bullets = gallery.querySelectorAll('.bullets-item');
    for (const item of bullets) item.classList.remove('active');
    bullets[index].classList.add('active');
  },
};

export default galleryCarousel;
