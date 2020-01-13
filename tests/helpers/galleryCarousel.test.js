import galleryCarousel from '~/helpers/galleryCarousel';

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

describe('gallery slides', () => {
  it('After content rendering one slide should be active', () => {
    document.body.innerHTML = testContent;
    galleryCarousel.init();

    const activeSlide = document.body.querySelector('.kg-gallery-container .kg-gallery-image img.active');

    expect(activeSlide).not.toBeNull();

    document.body.innerHTML = '';
  });

  it('On gallery clicks one slide should remain active', () => {
    document.body.innerHTML = testContent;
    galleryCarousel.init();

    const gallery = document.querySelector('.kg-gallery-container');
    gallery.click();

    const activeSlide = document.body.querySelector('.kg-gallery-container .kg-gallery-image img.active');

    expect(activeSlide).not.toBeNull();

    document.body.innerHTML = '';
  });
});


describe('gallery bullets', () => {
  it('Rendered bullets blocks', () => {
    document.body.innerHTML = testContent;
    galleryCarousel.init();
    expect(document.body.querySelectorAll('.bullets').length).toBeGreaterThan(0);
  });
});
