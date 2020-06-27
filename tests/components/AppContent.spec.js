import { shallowMount } from '@vue/test-utils';
import AppContent from '~/components/AppContent.vue';

const createWrapper = (content) => shallowMount(AppContent, { propsData: { content } });

describe('AppContent', () => {
  it('Actual renderes HTML', () => {
    const wrapper = createWrapper('<h1>Test</h1>');

    expect(wrapper.html()).toContain('<div class="content app-content">');
    expect(wrapper.html()).toContain('<h1>Test');
  });
});
