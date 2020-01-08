export default {
  mounted() {
    this.addClickHandlersToGalleries();
  },

  methods: {
    addClickHandlersToGalleries() {
      const galleries = document.querySelectorAll('.kg-gallery-container');

      galleries.forEach((gallery) => {
        const slides = gallery.querySelectorAll('.kg-gallery-image img');

        this.toggleSlide(slides);

        let currentSlideIndex = 1;

        gallery.addEventListener('click', () => {
          this.toggleSlide(slides, currentSlideIndex);
          if (currentSlideIndex < slides.length - 1) {
            currentSlideIndex += 1;
            return;
          }
          currentSlideIndex = 0;
        });
      });
    },

    toggleSlide(slides, currentIndex = 0) {
      slides.forEach((slide, index) => {
        slide.classList.add('active');
        slide.classList.remove('active');
        if (index === currentIndex) {
          slide.classList.add('active');
        }
      });
    },
  },
};
