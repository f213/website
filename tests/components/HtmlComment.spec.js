/* eslint-disable vue/one-component-per-file */
import Vue from 'vue';
import { mount } from '@vue/test-utils';
import HtmlComment from '~/components/HtmlComment.vue';

describe('Component for rendering HTML comments', () => {
  it('renders html comment inside tag `div` correctly', () => {
    const text = 'test';
    const Root = Vue.extend({
      components: { HtmlComment },
      render(h) {
        return h('div', [h('HtmlComment', { props: { text } })]);
      },
    });
    const root = mount(Root);
    expect(root.html()).toContain('<!--test-->');
  });
  it('renders empty comment if text is not specified', () => {
    const Root = Vue.extend({
      components: { HtmlComment },
      render(h) {
        return h('div', [h('HtmlComment')]);
      },
    });
    const root = mount(Root);
    expect(root.html()).toContain('<!---->');
  });
});
