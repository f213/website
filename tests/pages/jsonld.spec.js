import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import PostPage from '~/pages/_slug.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const wrapper = shallowMount(PostPage, {
  mocks: {
    $store: {
      state: {
        posts: {
          post: {
            page: false,
            html: '<div class="test">test post</div>',
            tags: [
              { name: '' },
            ],
          },
        },
      },
    },
  },
  localVue,
});
const jsonld = wrapper.vm.$options.jsonld.bind(wrapper.vm.$store.state.posts);
jsonld();

describe('PostPage', () => {
  it('', () => {
    expect(null).toBeNull();
  });
});
