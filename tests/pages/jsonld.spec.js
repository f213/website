import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import PostPage from '~/pages/_slug.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const createJsonldFunction = (isPage = false) => {
  const wrapper = shallowMount(PostPage, {
    mocks: {
      $store: {
        state: {
          posts: {
            post: {
              page: isPage,
              title: 'test post title',
              tags: [{ name: 'tagName1' }, { name: 'tagName2' }],
            },
          },
        },
      },
    },
    localVue,
  });
  return wrapper.vm.$options.jsonld.bind(wrapper.vm);
};

describe('Jsonld function', () => {
  describe('Not post page', () => {
    const jsonld = createJsonldFunction(true);

    it('Jsonld function return null for a not post page', () => {
      expect(jsonld()).toBeUndefined();
    });
  });

  describe('Post page', () => {
    const jsonld = createJsonldFunction();

    it('Jsonld function return a correct post headline for a post page', () => {
      const { headline } = jsonld();
      expect(headline).toBe('test post title');
    });

    it('Jsonld function return correct post keywords for a post page', () => {
      const { keywords } = jsonld();
      expect(keywords).toBe('tagName1, tagName2');
    });
  });
});
