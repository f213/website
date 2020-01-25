const galleryCarousel = {
  init() {
    const galleries = document.querySelectorAll('.kg-gallery-container');

    galleries.forEach((gallery) => {
      const slides = gallery.querySelectorAll('.kg-gallery-image img');
      galleryCarousel.addBullets(gallery, slides, slides.length);
      galleryCarousel.toggleSlide(gallery, slides);
    });
  },

  addBullets(gallery, slides, count) {
    const bulletsElement = document.createElement('ul');

    bulletsElement.classList.add('bullets');
    gallery.append(bulletsElement);

    for (let i = 0; i < count; i += 1) {
      const bulletsItem = document.createElement('li');
      bulletsItem.classList.add('bullets-item');
      bulletsElement.append(bulletsItem);
    }
    const bullets = gallery.querySelectorAll('.bullets-item');
    galleryCarousel.addGalleryEventListeners(gallery, slides, bullets);
  },

  addGalleryEventListeners(gallery, slides, bullets) {
    let activeSlideIndex = 1;

    bullets.forEach((item, index) => {
      item.addEventListener('click', (evt) => {
        evt.stopPropagation();
        activeSlideIndex = (index < bullets.length - 1) ? (index + 1) : 0;
        galleryCarousel.toggleSlide(gallery, slides, index);
      });
    });

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
    slides.forEach((slide, index) => {
      slide.classList.remove('active');
      if (index === activeSlideIndex) {
        slide.classList.add('active');
        galleryCarousel.highlightActiveBullet(gallery, index);
      }
    });
  },

  highlightActiveBullet(gallery, index) {
    const bullets = gallery.querySelectorAll('.bullets-item');
    bullets.forEach(item => item.classList.remove('active'));
    bullets[index].classList.add('active');
  },
};

export default galleryCarousel;
