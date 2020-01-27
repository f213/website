import { shallowMount, createLocalVue } from '@vue/test-utils';
import NuxtJsonld from 'nuxt-jsonld';
import PostPage from '~/pages/_slug.vue';

const localVue = createLocalVue();
localVue.use(NuxtJsonld);

describe('PostPage', () => {
  it('Renders json-ld element in post page', () => {
    const $route = { path: '/stack-choice-for-devs/' };
    const wrapper = shallowMount(PostPage, {
      localVue,
      attachToDocument: true,
      mocks: {
        $route,
      },
      computed: {
        post() {
          return ({
            page: true,
            html: '<div class="test">test post</div>',
          });
        },
        similar() {
          return [];
        },
      },
    });

    wrapper.vm.jsonld();
    const jsonldElement = document.querySelector('script[type="application/ld+json"]');
    expect(jsonldElement).not.toBeNull();
  });
});
