import AppPagination from '~/components/AppPagination.vue';
import { shallowMount } from '@vue/test-utils';

const mount = (propsData, route) => shallowMount(AppPagination, {
  propsData,
  mocks: {
    $route: {
      path: '/tags/test/',
      ...route,
    },
  },
  computed: {
    pages: () => 10,
  },
});

describe('AppPagination', () => {
  describe('Next page link [tag page]', () => {
    const createWrapper = params => mount({ destination: 'next' }, { params, name: 'tags-tag-page-number' });

    it('Should be 2 when page is 1', () => {
      const wrapper = createWrapper({ });
      wrapper.vm.$route.name = 'tags-tag';
      expect(wrapper.vm.link).toEqual({ name: 'tags-tag-page-number', params: { number: 2 } });
    });

    it('Should be 3 when page is 2 with correct current route name', () => {
      const wrapper = createWrapper({ number: 2 });
      expect(wrapper.vm.link).toEqual({ name: 'tags-tag-page-number', params: { number: 3 } });
    });

    it('Should be 3 when page is 2 with incorrect current route name', () => {
      const wrapper = createWrapper({ number: 2 });
      wrapper.vm.$route.name = 'tags-tag';
      expect(wrapper.vm.link).toEqual({ name: 'tags-tag-page-number', params: { number: 3 } });
    });
  });

  describe('Prev page link [tag page]', () => {
    const createWrapper = params => mount({ destination: 'prev' }, { params, name: 'tags-tag-page-number' });
    it('Should be 2 when page is 3', () => {
      const wrapper = createWrapper({ number: 3 });
      expect(wrapper.vm.link).toEqual({ name: 'tags-tag-page-number', params: { number: 2 } });
    });

    it('Should be 1 when page is 2', () => {
      const wrapper = createWrapper({ number: 2 });
      expect(wrapper.vm.link).toEqual({ name: 'tags-tag', params: { } });
    });

    it('Should preserve other route params when deleting the page param', () => {
      const wrapper = createWrapper({ number: 2, tag: 'test' });
      expect(wrapper.vm.link).toEqual({ name: 'tags-tag', params: { tag: 'test' } });
    });

    it('Should be 2 when page is 3 [incorrect current route name]', () => {
      const wrapper = createWrapper({ number: 3 });
      wrapper.vm.$route.name = 'tags-tag';
      expect(wrapper.vm.link).toEqual({ name: 'tags-tag-page-number', params: { number: 2 } });
    });

    it('Should be 1 when page is 2 [incorrect route name]', () => {
      const wrapper = createWrapper({ number: 2 });
      wrapper.vm.$route.name = 'tags-tag';
      expect(wrapper.vm.link).toEqual({ name: 'tags-tag', params: { } });
    });
  });

  describe('Next page link [index page]', () => {
    const createWrapper = params => mount({ destination: 'next' }, { params, name: 'page-number' });

    it('Should be 2 when page is 1', () => {
      const wrapper = createWrapper({ });
      expect(wrapper.vm.link).toEqual({ name: 'page-number', params: { number: 2 } });
    });

    it('Should be 3 when page is 2 with correct current route name', () => {
      const wrapper = createWrapper({ number: 2 });
      expect(wrapper.vm.link).toEqual({ name: 'page-number', params: { number: 3 } });
    });

    it('Should be 3 when page is 2 with incorrect current route name', () => {
      const wrapper = createWrapper({ number: 2 });
      wrapper.vm.$route.name = 'page-number';
      expect(wrapper.vm.link).toEqual({ name: 'page-number', params: { number: 3 } });
    });
  });

  describe('Prev page link [index page]', () => {
    const createWrapper = params => mount({ destination: 'prev' }, { params, name: 'page-number' });

    it('Should be 2 when page is 3', () => {
      const wrapper = createWrapper({ number: 3 });
      expect(wrapper.vm.link).toEqual({ name: 'page-number', params: { number: 2 } });
    });

    it('Should be 1 when page is 2', () => {
      const wrapper = createWrapper({ number: 2 });
      expect(wrapper.vm.link).toEqual({ name: 'index', params: { } });
    });

    it('Should preserve other route params when deleting the page param', () => {
      const wrapper = createWrapper({ number: 2, tag: 'test' });
      expect(wrapper.vm.link).toEqual({ name: 'index', params: { tag: 'test' } });
    });

    it('Should be 2 when page is 3 [incorrect current route name]', () => {
      const wrapper = createWrapper({ number: 3 });
      wrapper.vm.$route.name = 'index';
      expect(wrapper.vm.link).toEqual({ name: 'page-number', params: { number: 2 } });
    });

    it('Should be 1 when page is 2 [incorrect route name]', () => {
      const wrapper = createWrapper({ number: 2 });
      wrapper.vm.$route.name = 'index';
      expect(wrapper.vm.link).toEqual({ name: 'index', params: { } });
    });
  });

  describe('Hiding pagintion', () => {
    const createWrapper = (destination, params) => mount({ destination }, { params, name: 'page-number' });

    it('Next page should be hidden on 10-th page', () => {
      const wrapper = createWrapper('next', { number: 10 });
      expect(wrapper.vm.display).toBeFalsy();
    });

    it('Next page should be displayed on 9-th page', () => {
      const wrapper = createWrapper('next', { number: 9 });
      expect(wrapper.vm.display).toBeTruthy();
    });

    it('Next page should be displayed on the first page', () => {
      const wrapper = createWrapper('next', {});
      expect(wrapper.vm.display).toBeTruthy();
    });

    it('Prev page should be hidden on the first page', () => {
      const wrapper = createWrapper('prev', {});
      expect(wrapper.vm.display).toBeFalsy();
    });

    it('Prev page should be displayed on the second page', () => {
      const wrapper = createWrapper('prev', { number: 2 });
      expect(wrapper.vm.display).toBeTruthy();
    });
  });
});
