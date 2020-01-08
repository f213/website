import galleryCarousel from '~/helpers/mixins/galleryCarousel';

const testContent = `
  <div class="kg-gallery-container">
    <div class="kg-gallery-image">
      <img>
    </div>
    <div class="kg-gallery-image">
      <img>
    </div>
    <div class="kg-gallery-image">
      <img>
    </div>
  </div>
`;

describe('galleryCarousel mixin', () => {
  it('After content rendering one slide should be active', () => {
    document.body.innerHTML = testContent;
    galleryCarousel.methods.addClickHandlersToGalleries();

    expect(document.body.querySelectorAll('.kg-gallery-container .kg-gallery-image img.active').length).toBe(1);

    document.body.innerHTML = '';
  });

  it('On gallery clicks one slide should remain active', () => {
    document.body.innerHTML = testContent;
    galleryCarousel.methods.addClickHandlersToGalleries();

    const gallery = document.querySelector('.kg-gallery-container');
    const slides = document.querySelectorAll('.kg-gallery-image');

    let count = 0;
    while (count < slides.length) {
      expect(document.body.querySelectorAll('.kg-gallery-container .kg-gallery-image img.active').length).toBe(1);
      gallery.click();
      count += 1;
    }

    document.body.innerHTML = '';
  });

  it('On gallery clicks an active slide should change cyclically', () => {
    document.body.innerHTML = testContent;
    galleryCarousel.methods.addClickHandlersToGalleries();

    const gallery = document.querySelector('.kg-gallery-container');
    const slides = document.querySelectorAll('.kg-gallery-image');

    let count = 0;
    while (count < slides.length) {
      expect(slides[count].querySelector('img').classList.contains('active')).toBe(true);
      gallery.click();
      count += 1;
    }

    count = 0;
    expect(slides[count].querySelector('img').classList.contains('active')).toBe(true);

    document.body.innerHTML = '';
  });
});
