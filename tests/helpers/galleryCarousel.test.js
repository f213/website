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

beforeEach(() => {
  document.body.innerHTML = testContent;
  galleryCarousel.init();
});

afterEach(() => {
  document.body.innerHTML = '';
});

describe('gallery slides', () => {
  it('After content rendering one slide should be active', () => {
    const activeSlideElement = document.body.querySelector('.kg-gallery-container .kg-gallery-image img.active');

    expect(activeSlideElement).not.toBeNull();
  });

  it('On gallery clicks one slide should remain active', () => {
    const gallery = document.querySelector('.kg-gallery-container');
    gallery.click();

    const activeSlideElement = document.body.querySelector('.kg-gallery-container .kg-gallery-image img.active');

    expect(activeSlideElement).not.toBeNull();
  });
});

describe('gallery bullets', () => {
  it('Rendered bullets blocks', () => {
    const bulletsElement = document.body.querySelectorAll('.bullets');
    expect(bulletsElement.length).toBeGreaterThan(0);
  });
});
