export default {
  mounted() {
    this.addCarouseles();
  },

  methods: {
    addCarouseles() {
      const galleries = document.querySelectorAll('.kg-gallery-container');

      galleries.forEach((gallery) => {
        const slides = gallery.querySelectorAll('.kg-gallery-image img');
        this.addBullets(gallery, slides.length);
        this.toggleSlide(gallery);

        let currentSlideIndex = 1;

        gallery.addEventListener('click', () => {
          this.toggleSlide(gallery, currentSlideIndex);
          if (currentSlideIndex < slides.length - 1) {
            currentSlideIndex += 1;
            return;
          }
          currentSlideIndex = 0;
        });
      });
    },

    toggleSlide(gallery, currentIndex = 0) {
      const slides = gallery.querySelectorAll('.kg-gallery-image img');

      slides.forEach((slide, index) => {
        slide.classList.add('active');
        slide.classList.remove('active');
        if (index === currentIndex) {
          slide.classList.add('active');
          this.toggleActiveBullet(gallery, index);
        }
      });
    },

    addBullets(gallery, count) {
      const bullets = document.createElement('ul');

      bullets.classList.add('bullets');
      gallery.append(bullets);

      for (let i = 1; i <= count; i += 1) {
        const bulletsItem = document.createElement('li');
        bulletsItem.classList.add('bullets-item');
        bullets.append(bulletsItem);
      }
    },

    toggleActiveBullet(gallery, index) {
      const bullets = gallery.querySelectorAll('.bullets-item');
      bullets.forEach(item => item.classList.remove('active'));
      bullets[index].classList.add('active');
    },
  },
};
